/* 元のURL: https://eset.com */

(function () {
  const CONFIG = {
    startHour: 0,
    endHour: 25,
    chatbotConfig: {
      models: [
        {
          id: 3,
          name: "Eset Copilot 3",
          communicationType: "websocket",
          description: "Specialized model for sales",
          websocketUrl: "wss://ws.eset.com/chatbot",
          skills: null,
          loadPreviousSession: false,
          privacyPolicy: {
            url: "https://www.eset.com/us/policy-hub/privacy/",
          },
          initialMessages: [
            `Hello! I’m ESET AI Advisor &#129302;
 
I’m here to help answer your questions using AI.
 
By continuing, you agree to this chat being recorded and monitored for quality, service, and response purposes. ESET retains the data for 7 days and does not share personally identifiable information with third parties.`, 'How can I help you?'
          ],
          isDefault: true,
        },
      ],
      locale: "en-US",
      crudApiBaseUrl: "https://api.cms.eset.com",
      projectId: 17,
    },
    scriptUrl: "https://cdn.esetstatic.com/chatbot/eset-chatbot-ce.umd.js?v=1.7",
  };
  const now = new Date();
  const hour = now.getHours();

  if (!((hour >= CONFIG.startHour && hour <= 23) || (hour >= 0 && hour < CONFIG.endHour))) {
    return;
  }

  const chatbot = document.createElement("eset-chatbot");

  chatbot.setAttribute("config", JSON.stringify(CONFIG.chatbotConfig));
  document.body.appendChild(chatbot);

  const script = document.createElement("script");

  script.src = CONFIG.scriptUrl;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
})();


