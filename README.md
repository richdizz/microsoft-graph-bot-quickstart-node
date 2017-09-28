**I am fully aware I left sensitive information in the .env file. This was done on purpose so the project could be easly cloned and immediately run. There is nothing in there you can do anything melicous with...I think :)**

# Microsoft Graph Bot Quickstart (NodeJS)
This repository holds a quickstart template for building a bot that connects to the Microsoft Graph. A more complex quickstart for building bots with the Microsoft Graph **with LUIS** can be found [HERE](https://github.com/richdizz/microsoft-graph-bot-quickstart-luis-node). Please follow the steps below to use this project.

**This is not designed for production. It exists primarily to get you started quickly with learning and prototyping bots that connect to the Microsoft Graph**

Please keep the above in mind before posting issues and PRs on this repo.

## Working with the Microsoft Graph in a Bot
This project uses the [BotAuth](https://github.com/MicrosoftDX/botauth) package(s) for handling authentication against Azure AD. BotAuth uses a magic number to secure the authentication flow, even when the bot is part of a group conversation.

## Steps for using the Quickstart
1. You will start by cloning the Quickstart template into a new project folder:

```
git clone https://github.com/richdizz/microsoft-graph-bot-quickstart.git MyProjectName
```

2. Next, discard the git references:

```
rm -rf .git  # OS/X (bash)
rd .git /S/Q # windows
```

3. Install packages and start the application.

```
npm install
npm start
```

4. Launch the Bot Framework Emulator (available [HERE](https://docs.botframework.com/en-us/tools/bot-framework-emulator/)).

5. Enter the messaging endpoint for the bot project (likely http://localhost:3980/api/messages but could be a different port) and the click the "Connect" button (leave the Microsoft App ID and Microsoft App Password blank as these are for published bots).

6. Type anything to the bot and follow the prompts.

![Animated gif of Quickstart project run in the Bot Emulator](https://github.com/richdizz/microsoft-graph-bot-quickstart-luis/blob/master/Images/MsftGraphBotQuickStartLUIS.gif?raw=true)

## Going further
The first step in going further would be to register your own appliation at [https://apps.dev.office.com](https://apps.dev.office.com). This will allow you to play with different scopes and Microsoft Graph endpoints. It is also recommended you experiment with the bot in real Bot Framework channels (vs the emulator). The Bot Framework supports a number of channels, including Facebook Messenger, Microsoft Teams, Skype, and much more. You can register a bot at [https://bots.botframework.com](https://bots.botframework.com).