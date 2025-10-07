export default function TypingIndicator() {
  return (
    <div className="typing-indicator flex items-center p-4">
      <span className="w-2 h-2 rounded-full bg-blue-400 mr-1 animate-pulse" />
      <span className="w-2 h-2 rounded-full bg-blue-400 mr-1 animate-pulse delay-150" />
      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-300" />
    </div>
  );
}
