import { FeatherIcon } from "../../utils/feather";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6 md:mb-0">
          AI Nexus
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FeatherIcon name="github" color="currentColor" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FeatherIcon name="twitter" color="currentColor" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FeatherIcon name="linkedin" color="currentColor" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-slate-500 text-sm">
        © 2025 AI Nexus. All rights reserved. Designed for developer portfolios.
      </div>
    </footer>
  );
}
