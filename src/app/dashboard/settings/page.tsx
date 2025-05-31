'use client';

import React, { useState } from "react";
import BotPage from "@/components/BotPage";
import Profile from "@/components/profile";
import Automation from "@/components/automation";
import Business from "@/components/business";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("bot");
  const tabs = ["bot", "profile", "automation", "business account"];

  const renderContent = () => {
    switch (activeTab) {
      case "bot":
        return (
          <BotPage />
        );
      case "profile":
        return (
          <Profile/>
        );
      case "automation":
        return (
         <Automation />
        );
      case "business account":
        <Business />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <div className="flex gap-4 border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 capitalize border-b-2 transition-colors duration-200 ${activeTab === tab ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-blue-600'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}
