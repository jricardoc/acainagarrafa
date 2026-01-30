export function SectionDivider() {
  return (
    <div className="relative py-6 sm:py-8">
      <div className="relative flex items-center justify-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-pink-500/60" />
        <div className="mx-4">
          <div className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-pink-500/20 to-pink-500/60" />
      </div>
    </div>
  );
}
