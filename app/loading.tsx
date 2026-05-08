export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080B10]">
      <div className="relative">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full animate-pulse" />
        
        {/* Spinner */}
        <div className="relative w-16 h-16 border-t-2 border-r-2 border-blue-500 border-solid rounded-full animate-spin">
          <div className="absolute inset-2 border-b-2 border-l-2 border-blue-300 border-solid rounded-full animate-spin-slow" />
        </div>
        
        {/* Logo/Text Placeholder */}
        <div className="mt-8 text-center">
          <div className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase animate-pulse">
            Infinity Solutions
          </div>
          <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>
      </div>
    </div>
  )
}
