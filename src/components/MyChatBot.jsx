import { p } from "maath/dist/misc-7d870b3c.esm";
import ChatBot from "react-chatbotify";

const MyChatBot = () => {
    const user_options = ["Hobby", "Work", "Contact", "Resume"];
    const user = localStorage.getItem("welcome");

    const settings = {
        botBubble: {
            simStream: true,
            dangerouslySetInnerHtml: true
        },
        audio: {
            disabled: false
        },
        voice: {
            disabled: false
        }
    }

    const flow={
		start: {
            transition: {duration: 0},
		    path: () => {
				if (user) {
					return "return_user";
				}
                return "new_user";
            },
		},
        return_user: {
            message: `Welcome back ${user}, how can I help you today? 😊`,
            transition: {duration: 0},
            path: "show_options"
        },
        new_user: {
            message: `Welcome there, it's great to meet you! What is your name? 😊`,
            path: (params) => {
                localStorage.setItem("welcome", params.userInput);
                params.injectMessage(`Hello there ${params.userInput}, what would you like to find out?`);
                return "show_options";
            }
        },
        hobby: {
            message: "I spend a vast majority of my free time coding random things! <a href='https://spaceships.tjtanjin.com/' target='_blank'><u>Classic spaceships game</u></a>, " +
                "<a href='https://www.spigotmc.org/resources/authors/tjtanjin.724342/' target='_blank'><u>minecraft plugins</u></a>, and even this very " +
                "<a href='https://react-chatbotify.com' target='_blank'><u>chatbot</u></a> you are interacting with! 😊<br/><br/>" +
                "When I am invested into a project, I really put in my efforts to make it the best that it can be!<br/><br/>" +
                "Of course, there are times I ain't coding. You may or may not be interested to know that I am also pretty good at league of legends and minecraft 😝",
            chatDisabled: true,
            transition: {duration: 3000},
            path: "prompt_again"
        },
        work: {
            message: "I've worked on a wide range of projects during my work opportunities. This ranges from content management systems, to REST APIs to mobile applications.<br/><br/>" +
                "As I also spend a great deal of time on my side projects, I have also dove into areas such as telegram bots, machine learning and server administration. In fact, keep looking and you will find some of my works on this website!<br/><br/>" +
                "I am a fast learner with an appetite for trying out new stuffs so having to deal with unfamiliar stuffs doesn't really bother me 😝",
            chatDisabled: true,
            transition: {duration: 3000},
            path: "prompt_again"
        },
        contact: {
            message: "I can be contacted via the following platforms 😊<br/><br/>" +
                "<ul style='list-style-type: disc; padding-left: 20px;'>" +
                "<li><a href='https://github.com/tjtanjin' target='_blank'><u>GitHub</u></a></li>" +
                "<li><a href='https://www.linkedin.com/in/cjtanjin/' target='_blank'><u>LinkedIn</u></a></li>" +
                "<li><a href='https://discord.gg/X8VSdZvBQY' target='_blank'><u>Discord</u></a></li>" +
                "<li><a href='mailto:cjtanjin@gmail.com' target='_blank'><u>Email</u></a></li></ul>" +
                "Feel free to reach out! 😊",
            chatDisabled: true,
            transition: {duration: 3000},
            path: "prompt_again"
        },
        resume: {
            message: "Sure thing! 😊 You can download my resume <a href='https://drive.google.com/uc?id=1mqG2V7AhDGvoajl2_nolMJr52YXQpp3Z&export=download' target='_blank'><u>here</u></a>",
            chatDisabled: true,
            transition: {duration: 3000},
            path: "prompt_again"
        },
        show_options: {
            options: ["Hobby", "Work", "Contact", "Resume"],
            path: (params) => {
                const choice = params.userInput.charAt(0).toUpperCase() + params.userInput.slice(1).toLowerCase();
                if (user_options.includes(choice)) {
                    return choice.toLowerCase();
                } else {
                    return "unknown_input";
                }
            }
        },
        prompt_again: {
            message: "Is there anything else that you would like to find out about me? 😊",
            transition: {duration: 0},
            path: "show_options"
        },
		unknown_input: {
			message: `Sorry ${user}, I do not understand what you're saying 😞`,
            chatDisabled: true,
            transition: {duration: 3000},
            path: "prompt_again"
		}
	}

    return (
        <ChatBot settings={settings} flow={flow}/>
    )
}

export default MyChatBot;