export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/precision/logo.png"
        alt=""
        width={44}
        height={44}
        className="size-11 rounded-md object-cover"
      />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-lg font-extrabold tracking-tight">PRECISION</span>
        <span className="mt-1 text-[10px] font-bold tracking-[0.22em]">GARAGE DOORS</span>
      </span>
    </span>
  );
}
