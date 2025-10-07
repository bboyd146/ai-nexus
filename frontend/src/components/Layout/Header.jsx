import { Link } from "react-router-dom";
import { FeatherIcon } from "../../utils/feather";

export default function Header({ handleNewChat }) {
  return (
    <header className="container mx-auto px-6 py-8">
      <nav className="flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          <Link to="/">AI Nexus</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/features"
            className="hover:text-blue-400 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/showcase"
            className="hover:text-blue-400 transition-colors"
          >
            Showcase
          </Link>
          <Link
            to="/technology"
            className="hover:text-blue-400 transition-colors"
          >
            Technology
          </Link>
          <Link
            to="/"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Try Demo
          </Link>
        </div>
      </nav>

      {handleNewChat && (
        <div className="flex items-center mb-6 justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center">
              <FeatherIcon name="MessageSquare" color="white" />
            </div>
            <div className="ml-3">
              <h3 className="font-medium">AI Assistant</h3>
              <p className="text-xs text-slate-400">Online</p>
            </div>
          </div>
          <button
            onClick={handleNewChat}
            className="text-xs px-3 py-1 rounded-full border border-slate-600 hover:bg-slate-800 transition-colors"
          >
            New Chat
          </button>
        </div>
      )}
    </header>
  );
}
