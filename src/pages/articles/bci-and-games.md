---
title: "Exploring game interaction using brain-computer interfaces"
date: "December 26, 2023"
excerpt: "How might low-risk, non-invasive brain-computer interfaces provide a nobel and more inclusive gaming experience?"
tags: ["Human-Computer Interaction", "UX Research", "Brain-Computer Interfaces"]
layout: "../../layouts/BlogPost.astro"
---

Brain-computer interfaces (BCI) use brain signals to control and interact with a system. Devices can range from non-invasive, such as headsets and electrodes that can be worn, to invasive surgical implants. Biotechnology and medical companies, including Synchron and Neuralink, have significantly advanced invasive BCI devices, which aim to augment human limitations and meet accessibility needs using neural implants. Additionally, promising results have been found in studies using BCI to control robotic and prosthetic limbs. Despite this, there needs to be more advancement or understanding of the application of less risky, non-invasive BCI devices, which could provide a novel and more inclusive gaming experience. The gaming community offers a large group of users who are often early adopters of new technologies and can help improve the experience to expand the usage of BCI to the general population. This literature review investigates the applicability of electroencephalogram (EEG)-based BCI systems in gaming and human-computer interaction factors that promote their widespread adoption.

## Gaming and robotic control studies
Scherer et al.'s research on EnhancedGaming and Robotic Control offers examples of the usage of non-invasive BCI in gaming and robotics. These studies aimed to improve BCI performance and accuracy and reduce the time and effort needed to train these systems.

### Basic BCI gameplay
One study allowed participants to control World of Warcraft, a massive multiplayer online role-playing game with an expansive open world. The team developed a graphical user interface to allow users to view their actions in the game while an electroencephalogram (EEG) hardware captured participants' brain signals. This method used motor imagery (MI), allowing players to imagine their movement to interact with the game's environment through their character. EEGs use brain signals to record and interpret user interactions and can interface with gaming systems through mapped controls and training. Players were able to navigate through the world using this method of gameplay. Limitations of using EEG to capture MI identified in the study include noise from brain signals reducing the accuracy of user actions, adaptability of the brain resulting in changes in brainwaves, and low bandwidth causing latency issues [7].


### Robotic control
Although this study does not explicitly focus on gameplay, a key consideration for using BCI in gaming is using hybrid modalities for user input, as will be discussed further in this literature review. Researchers tested an adaptive BCI, enabling users to focus less on the task and reduce the cognitive load in determining each process step. This is achieved using “adaptive hierarchical architecture that allows the user to customize the functionality of applications and teach the BCI new skills on the fly” [7]. An intelligent system, such as the one in this study, employs machine learning and user-led training to learn and predict how to accomplish the user's goals. When a robot lacks sufficient training or confidence in performing a task, it turns to the user for guidance and training. The benefit of this approach is reducing errors that could impact the user’s safety. The research concluded that the adaptive hierarchical system reduces the time and effort needed to complete detailed tasks using BCI [7].

## Feedback mechanisms in BCI games
### Interaction activities
Bos et al. developed the AlphaWow game, allowing players to navigate World of Warcraft using relaxed and stressed mental states [1]. The study aimed to determine what cognitive tasks users prefer to perform for the best experience. The three cognitive tasks tested were inner speech, deep thought, and mental state. During the experiment, there was variability in the amount of feedback players received related to the accuracy of the system’s performance. The results showed that the feedback group preferred the mental state activity, but the non-feedback group did not.

In contrast, the non-feedback group preferred inner speech because it required less effort. Since the feedback group learned that the inner speech task did not perform well, they liked it less. Players found the association task most difficult [1]. The experiment results indicate that users preferred activities that provided the most accuracy and were less mentally taxing.

### Training and calibration
In this study, an interactive game was designed, enabling players to control Anavatar using two distinct BCIs, namely NeuroSky and Emotiv. One BCI required no training, while the other necessitated training and calibration. Players provided with the training component using Emotiv felt engaged with the game, strongly desired to learn, and had better in-game control. NeuroSky participants reported difficulty changing mental tasks for the controls, delayed actions in the game, lack of feedback, and a steeper learning curve [4].

### Real-time neurofeedback
The research conducted by Vasiljevic and Miranda required participants to play meditation-based BCI games. These meditation games used neurofeedback, allowing players to receive and view real-time information from the game during the meditation process. The study showed that regardless of external conditions, subjects improved at the game and felt less mentally demanding with each play session. The meditation-based games also helped test subjects relax and learn to meditate, indicating that these games can be used to treat symptoms of specific mental health and neurodevelopment disorders.

## Research findings
Many of these studies show that BCI can be used to provide a novel, enhanced experience for gaming. However, because BCIs are prone to error, it is essential to provide clear user feedback and training methods for both the user and the system and give users additional control by overriding actions or multiple modalities to control the game. The mapping of game controls to users’ mental tasks is not always clear or intuitive. Adapting games for BCI will require user feedback and potentially reimagining or simplifying user interactions to reduce the cognitive load on players [1]. Lastly, developers should ensure game interactions meet the needs and user expectations of the specific game. Since there is latency in BCI systems, a multimodal interaction approach is better suited for fast-paced games.


## ‍Benefits of BCI in gaming
### Augmenting user abilities
As many of the studies reviewed indicate, a multimodal interaction approach could allow BCIs to augment the current user experience instead of replacing it. Using brain activity to rectify user errors can enhance the conventional gaming experience. The system could detect when a user perceives they have made an error and quickly undo the actions without the user’s intervention [1].

### Inclusivity
An essential aspect of adopting BCIs is improving the quality of life they provide to those who need it. Qualitative feedback from clinical studies documented by Kögel indicates that research participants felt a strong sense of engagement and community because of their ability to overcome the limitations of their disabilities [3]. Gaming generally requires abilities that can be exclusionary for those with disabilities. Incorporating BCI can improve gaming accessibility and promote inclusivity.

### Enhanced cognitive function
BCIs require players to take intentional steps to control their thoughts or emotions. The meditation games study shows that intentional and repetitive use of the brain to teach and promote a meditative state could benefit players’ emotional and mental well-being and improve concentration [8].

## Limitations of BCI in gaming
### User agency and error handling
In the feedback received in the Kögel study, participants felt empowered when the system worked well but claimed they were experiencing technical errors when it did not work as planned [3]. In competitive gaming, accountability and users’ perceived agency could impact their experience. BCI sensors can be sensitive and susceptible to errors, causing inaccurate detection of user interactions [6]. Until the technology is widely adopted and confidence in BCI performance and accuracy improves, users may perceive accidents and slips as technical errors.

### Real-world adaptation
Many of the studies in this literature review were completed in a controlled lab environment. This does not accurately reflect the potential performance issues the variability of real-world usage might create, including external distractions and player movement.

### Hardware
An important factor is the hardware needed to interact with BCI systems. Participants in each of these studies were provided with wearable caps. This hardware includes many wires and requires minimal movement to ensure accuracy. The size of the devices and the lack of mobility for players will impact the general adoption of this technology.

### Internal and external interference
There are biopsychological factors that can impact the performance of users. One factor is how distractions can result in user errors [3]. User feedback indicated that external and internal distractions could compound and negatively impact user performance. Research participants shared that when they were distracted, or an error occurred, they would continue to think or worry about it, causing additional internal distractions and mistakes, causing unintended brain signal activity.


## ‍Research Insights: enhancing the user experience
### Use the right modalities for gaming modes
Studies have shown that the current limitations of BCI require that the technology be applied to the appropriate type of games. At this time, it is best suited for slower-paced and casual games. Additionally, participants preferred competitive gameplay when the user experience and preferences were compared between cooperative and competitive games. This preference indicates that BCI games are also better suited for single-player gaming [8].

### Reduce mental load
Studies show that using BCI for games is tiresome for players. According to Liarokapis et al., research participants experienced fatigue within minutes of participating in the study, with fatigue increasing after an additional 30 minutes of gameplay [4]. Techniques such as adaptive hierarchical architecture can help reduce users’ long-term mental load to process tasks.

### Provide real-time feedback
Players can change their activities to interact with the system by incorporating real-time feedback in BCI games. This feedback can improve the user experience by ensuring players adapt their thoughts to transmit their intended game activity signals. Real-time feedback can indicate whether the system or user needs additional training or practice. The Bos et al. study showed that clear feedback and training sessions with the system would allow users to properly execute mental tasks required to control BCI systems. However, steps should be taken to ensure the training sessions are brief and can be incorporated into the game.

### Multimodal interaction controls
Due to the limited usage of BCI outside of academic research, multimodal interactions in BCI games still need to be improved. Much of the research attempts to use BCI as the sole mechanism for users to interact with a game, which has limitations [6]. Instead, BCI should be considered a modality to enhance existing gaming experiences instead of a replacement.


## Future research opportunities
### User confidence in new technology
The investigation of how user error interpretation varies with their familiarity with the technology is an intriguing subject that warrants research before the broader adoption of BCIs, extending beyond clinical applications. A study to compare how players perceive errors based on their confidence in the system could provide insight into how this could impact the gaming experience.

### Security and ethical considerations
Neurosecurity and ethical standards need widespread establishment. Understanding how user data is transmitted, interpreted, and stored is essential. As the scope of BCI extends to include additional applications, such as biometric authentication, it is imperative to exercise caution, as the misuse of this data when linked to a specific user remains a concern. Additionally, malicious interception and manipulation of real-time data could result in misuse of future gaming features, such as microtransactions.

### BCI for error reversal in multimodal games
The idea of using BCI not as a control for gameplay but instead as a mechanism to identify and undo user errors quickly could be studied. This could provide a clear use case for applying BCIto games to enhance players’ abilities.


## Supporting Research
1. Bos, Reuderink, B., van de Laar, B., Gürkök, H., Mühl, C.,Poel, M., Heylen, D., & Nijholt, A. (2010). Human-Computer Interaction for BCI Games: Usability and User Experience. 2010 International Conference on Cyberworlds, 277–281. https://doi.org/10.1109/CW.2010.22
2. Cattan. (2021). The Use of Brain–Computer Interfaces inGames Is Not Ready for the General Public. Frontiers in Computer Science(Lausanne), 3. https://doi.org/10.3389/fcomp.2021.628773
3. Kögel, Jox, R. J., & Friedrich, O. (2020). What is it like to use a BCI? — insights from an interview study with brain-computer interface users. BMC Medical Ethics, 21(1), 2–2.https://doi.org/10.1186/s12910-019-0442-2
4. Liarokapis, Debattista, K., V., A., P., P., & Ene, A.(2014). Comparing interaction techniques for serious games through brain–computer interfaces: A user perception evaluation study. EntertainmentComputing, 5(4), 391–399. https://doi.org/10.1016/j.entcom.2014.10.004
5. Liarokapis, Vourvopoulos, A., & Ene, A. (2015). Examining User Experiences through a Multimodal BCI Puzzle Game. 2015 19th International Conference on Information Visualisation, 488–493.https://doi.org/10.1109/iV.2015.87
6. Nijholt, Bos, D. P.-O., & Reuderink, B. (2009). Turning shortcomings into challenges: Brain–computer interfaces for games. Entertainment Computing, 1(2), 85–94. https://doi.org/10.1016/j.entcom.2009.09.007
7. Scherer, Friedrich, E. C. V., Allison, B., Pröll, M., Chung,M., Cheung, W., Rao, R. P. N., & Neuper, C. (2011). Non-invasive Brain-Computer Interfaces: Enhanced Gaming and Robotic Control. Advances in Computational Intelligence, 362–369. https://doi.org/10.1007/978-3-642-21501-8_45
8. Vasiljevic, & de Miranda, L. C. (2022). Comparing users performance and game experience between a competitive and collaborative brain-computer interface. Behavior & Information Technology,ahead-of-print(ahead-of-print), 1–20. https://doi.org/10.1080/0144929X.2022.2152727",

















