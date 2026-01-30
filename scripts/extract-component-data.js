import fs from 'fs';
import path from 'path';

// Improved Extraction Script v2 (Restored)

function cleanString(str) {
    if (!str) return "";
    return str.replace(/['"]/g, '').trim();
}

function extractStructure(content) {
    const nodes = [];
    const classRegex = /className:\s*"([^"]+)"/g;
    let match;

    while ((match = classRegex.exec(content)) !== null) {
        const fullClass = match[1];
        const startIndex = match.index;
        const contextEnd = Math.min(startIndex + 400, content.length);
        const context = content.substring(startIndex, contextEnd);

        const textMatch = context.match(/children:\s*"([^"]+)"/) ||
            context.match(/children:\s*\[\s*"([^"]+)"/);

        const imgMatch = context.match(/src:\s*([^,]+)/);

        const preContext = content.substring(Math.max(0, startIndex - 50), startIndex);
        const tagMatch = preContext.match(/jsx\s*\(\s*"(\w+)"/);

        // Filter simple utility classes to avoid noise
        if (fullClass.length > 10) {
            nodes.push({
                tag: tagMatch ? tagMatch[1] : 'div',
                classes: fullClass,
                text: textMatch ? textMatch[1] : null,
                imgSrc: imgMatch ? imgMatch[1] : null
            });
        }
    }

    return nodes;
}

const targetFile = process.argv[2];
try {
    const content = fs.readFileSync(targetFile, 'utf8');
    const structure = extractStructure(content);

    // Print structure to find Hero
    console.log("--- STRUCTURE DUMP ---");
    structure.forEach((node, i) => {
        // Hero usually has relative, min-h-screen, overflow-hidden
        if (node.classes.includes('min-h-screen') || node.classes.includes('relative pt-')) {
            console.log(`[${i}] <${node.tag}> .${node.classes}`);
            if (node.text) console.log(`    Text: "${node.text}"`);
            if (node.imgSrc) console.log(`    Image: ${node.imgSrc}`);
        }
    });

} catch (e) {
    console.log(e.message);
}
