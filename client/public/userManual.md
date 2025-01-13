## General
---[<i class="fa-solid fa-door-open"></i>]---
!!![EcoNeuron is an energy auditing robot that identifies inefficiencies, and generates reports to enhance sustainability and safety in hazardous locations.]!!!

For our project to be fully functional and for users to benefit from all the features we are incorporating an operation user manual available for downloading and reading from the website for easy access and a better interaction experience. This way the user will gain the required knowledge to operate the robot successfully and fulfill the need for the robot.

### 1.1 Introduction and purpose 
Energy efficiency has become essential in the present day. Traditional energy audits might take a long time and don't provide real-time information.

EcoNeuron is an energy auditing robot designed to help improve the sustainability of buildings and lower the overall costs of using energy in a way that doesn’t affect the user’s necessary daily usage and habits.

To complete this mission the robot identifies inefficiencies and suggests recommended actions based on the data read by the incorporated sensors and the AI model then it sends a notification to the user's phone to follow the suggested instructions. Finally, each week a new report will be generated for the user in which the consumption of the week is analyzed and stated in detail so that the user can take actions to enhance their building sustainability leading to lower costs and a better environment.  

Its unique approach purely saves time, but it also gives people the ability to make smart decisions that will improve their energy use and help create an environmentally friendly future.

EcoNeuron is purpose-built for environments where traditional energy audits pose risks to professional auditors, such as factories, industrial sites, and other hazardous locations. By automating the energy auditing process, EcoNeuron minimizes human exposure to potentially dangerous conditions while ensuring the accuracy and practicality of audit results. Additionally, it seeks to enhance the sustainability of non-smart buildings by offering modern energy-saving solutions without necessitating a complete structural redesign. This makes EcoNeuron an ideal solution for improving safety and bridging the energy management gap between conventional and smart buildings.
### 1.2 Project references 
### 1.3 Glossary 


- **Machine Learning:** A type of AI where the robot learns and improves its analysis over time by studying the data it collects.
- **Autonomous Navigation:** The robot’s ability to move and perform tasks on its own, without needing human guidance.
- **Thermal Camera:** A special sensor that detects heat and shows temperature differences to identify energy inefficiencies.
- **Energy Efficiency:** Using energy in a way that avoids waste and ensures the best possible performance for less cost.
- **IoT (Internet of Things):** A system where devices, like the robot, connect and share data over the internet to work smarter.
- **Energy Auditing:** The process of inspecting and analyzing how energy is used in a building to find areas for improvement.
- **Mapping Algorithms:** Programs that help the robot create a map of its surroundings to navigate effectively.
- **Decision Making Module:** A part of the robot’s software that processes information and recommends actions to improve energy use.
- **Sustainability:** Using resources in a way that protects the environment and ensures future generations can also meet their needs.
- **Hazardous Locations:** Dangerous areas where humans might face risks, such as extreme heat or toxic environments, but where the robot can operate safely.
- **Data Calibration:** Adjusting the robot’s sensors to ensure they provide accurate and reliable information.
- **Energy Management Gap:** The difference in energy performance between advanced smart buildings and traditional ones.	
- **User Interface (UI):** The screen and controls that let you interact with the robot and its mobile app.
- **Artificial Intelligence (AI):** Technology that enables the robot to analyze data and make decisions similar to how humans think. 

## System Overview

---[<i class="fa-solid fa-gears"></i>]---
!!![An AI-powered robot for energy audits, offering real-time insights and reports to optimize energy use in homes and businesses.]!!!

### 2.1 System features 
EcoNeuron is equipped with many features to enhance the user experience while still fulfilling its purpose as an energy auditing robot by incorporating advanced technology and maintaining a user-friendly design and user interface.
These features are:

#### Advanced data collection 
We made sure that we equipped the robot with all the needed sensors to collect a various amount of data that can help in the decision-making process such as temperature sensors, humidity sensors, lightning sensors, motion sensors, thermal camera, and pressure sensors. The collected data from these sensors help make the recommended action by the robot as helpful and customized as possible for the user to maximize the benefit of using it.

#### Artificial intelligence 
To increase the accuracy of the data analysis and the energy-saving action we built an artificial intelligence model that uses the best algorithms to carefully analyze the entered data. Moreover, the model is incorporated with machine learning to further develop its ability to come up with tailored decisions to the user’s lifestyle and building requirements.
#### Real-Time Notifications
EcoNeuron has a real-time notification system so that customers can quickly take action for the recommendation. right after the inefficiency detection and analysis the robot sends a message to the user's phone with what to do. This way users could take advantage of the findings and increase the energy efficiency of a building without wasting more time
#### Weekly Reports
EcoNeuron helps users to manage energy resources over time by providing detailed weekly reports. These reports will offer a comprehensive assessment of the building's energy usage, allowing for the measurement of areas in need of improvement and the efficacy of previously implemented modifications. It can help users make well-informed decisions about cost reduction and sustainability by providing the facts in a clear and organized way.

#### Autonomous Operation
EcoNeuron will help make energy audits so much easier for users by working independently. The robot will independently move over the building collecting data with full coverage of regions. This eliminates manual involvement and saves time in the process of energy auditing where no major areas are left out.

### 2.2 System application
According to the introduction, EcoNeuron Energy Auditing Robot is the latest innovation toward better energy efficiency in different environments, including: residential, commercial, and industrial settings.

Its main purpose is to spot energy inefficiency use in buildings, which offers recommended solutions for improvement in energy consumption, combined with weekly reports on in-depth data that will direct the users toward sustainability regarding energy use in buildings.

Equipped with advanced sensors, artificial intelligence, and autonomous operation, EcoNeuron excels in:

-  Real-time energy auditing in hazardous or inaccessible areas, including areas that are hard for energy auditing professionals to visit frequently.
- Bridging the gap from smart to conventional buildings: Offering modern energy management solutions, making buildings' IoT systems accessible for all types of buildings-even non modern ones.
- Empowering the user with sustainable insights, through notifications and weekly reports, to make smarter energy decisions that reduce environmental impact.
### 2.3 System organization
EcoNeuron project operates as an integrated system with smooth interaction between hardware and software systems, ensuring precise and efficient energy auditing. Below is an organizational table of the ‘Operational Workflow of EcoNeuron System’, its content is discussed further below detailing the operation and inter-relationships:

|Step|Description|
| :- | :- |
|Power on|The robot starts operating and performs systems check to confirm that all the systems are fully functioning.|
|Data Collection|Sensors collect real-time data, this includes temperature , humidity , lighting , motion and more.|
|Data Processing and Analysis|The AI module analyzes the gathered data to spot and identify energy consumption inefficiencies and potential improvements.|
|Suggesting Actions|Notifications with the recommended actions to take are sent to the user's mobile application.|
|Weekly Reports|A detailed report that summarizes energy usage and suggests long-term improvements is generated and provided weekly to the user|
|Power Off|Once the robot’s round is completed, it powers off or returns to its docking charge station for recharging.|

#### Hardware Data Collection Layer:
- **Sensors**: Temperature, humidity, lighting, motion, thermal camera, and pressure sensors collect raw data.
- **Mobility Module:** Autonomous navigation using motion sensors and mapping algorithms that guarantees great coverage of the building.**

#### Software Data Processing and Analysis Layer:
- **Artificial Intelligence**:
	- Analysis Module: This module will process data from sensors using machine learning algorithms.
	- Decision-Making Module: This module will come up with energy-saving solutions and recommendations tailored to the user's building.
- **Notification System:** 
	This system turns insights into action-oriented notifications and sends it on the user's mobile device.


#### User Interaction Layer:
- **Mobile Application Integration**:
	1. Provides real time notifications of action needed to be taken.
	2. Makes the user able to monitor the robot’s progress, and keeps user updated when the robot faces a certain obstacle that could stop it from operating efficiently.

#### Output Layer

- **Weekly Reports:** 
   This service will provide the user with reports about energy usage through out the week, and provides recommendation for improving energy use in the upcoming weeks 

- **Real-Time Recommendations**: 
   Once the detection of areas of improvement in energy consumption is done, the user will be immediately notified to allow him to take prompt action.**


### 2.4 Software inventory 
This section identifies software units crucial for robot and backend server operations, identification, security considerations, and their role in emergency recovery.

|**Software Name**|**Version**|**Description**|**Identification**|**Security Considerations**|**Emergency Recovery Role**|
| :-: | :-: | :-: | :-: | :-: | :-: |
|Robot Operating System (ROS)|ROS 2 Jazzy, running on ubuntu-24.04.1|Middleware for robot control and operations.|Robot OS Version: ROS2-JAZZY|Restricted access via SSH; uses TLS for communication between components.|Essential for all robotic operations and control logic.|
|Robot Application Software|Custom v1.2|Proprietary robot software for task execution.|Git Repository: robot-app|Security patches applied regularly; code signing to prevent unauthorized updates.|Required for restoring robot functionality.|
|Robot Navigation Software|ROS 2 Jazzy + SLAM|Processes LiDAR data to generate real-time maps and perform localization using the SLAM algorithm.|ROS Dependency: ros2-jazzy-slam|Configured with read-only file permissions; processes sanitized LiDAR inputs.|Critical for restoring navigation and mapping capabilities.|
|Backend Server OS|ubuntu server 24.04.1|Hosts the backend services for the system.|Server OS Version: UBNT-22.04-001|Secured with firewall rules, regular updates, and minimal user access.|Fundamental for bringing up backend services.|
|Backend Database|PostgreSQL 14|Stores robot logs and operational data.|Database Instance ID: DB-POSTGRES-001|Encrypted storage; user access restricted by roles.|Needed to restore data access for robot management.|
|Backend API Software|Custom API v2.0, with python|Interfaces with the robot and external systems.|Git Repository: backend-api|Secured with API tokens and rate limiting.|Essential for resuming robot-server communications.|
|Backup Utility|rsync + cron|Automates backups of system configurations.|Backup Script Path: /etc/backup.sh|Data encrypted during transfer; backup access restricted.|Allows restoration of system configurations.|
|Security Software|Fail2Ban|Protects against brute-force attacks.|Configuration File: /etc/fail2ban|Monitors SSH and critical service logs for anomalies.|Helps secure system during recovery phases.|

In case of an emergency, the following software units are prioritized to restore the system's functionality and enable quick recovery of operations:

1\. ROS 2 Jazzy will be vital in the initialization and handling of core functionalities across the robot. It grants the middleware to enable communication in the dissemination of sensor data processing, sending control commands, and undertaking navigation. This software will need loading in case a failure arises to reenable communication in both hardware and software modules of the robot. The robot has no autonomous capabilities in regard to navigation or mapping with the absence of ROS 2.

2\. SLAM algorithm software, specifically the ROS 2 SLAM package for Jazzy, integrates LiDAR sensor data to create real-time 2D or 3D maps of the environment. Besides that, it contributes to the localization of the robot, which is very crucial in autonomous navigation. Restoring the SLAM functionality on such an emergency ensures the robot can process LiDAR data for obstacle detection, mapping of the environment, and safe navigation. Without SLAM, there is no mapping and further location of the robot's position; hence, this brings potential hazards and failures to mission execution.

3\. The robot application software runs specific tasks such as autonomous navigation, path planning, object handling, or any task-specific operations. This software ensures the robot can carry out predefined tasks autonomously, especially in mission-critical situations. The robot will not be able to execute its primary tasks if this software is down. It is important to try and get this application software running so that the robot can continue with its normal functions.

4\. Ubuntu 22.04 LTS as a server operating system provides backend services that can handle the communication of the robot with other systems. It is in charge of running web services, storing logs, monitoring the health of the robot, and performing requests from the robot that involve data analysis or even remote control. Without the server OS, backend services cannot work, thus it is impossible to store data and access critical information necessary for recovery, diagnostics, and system reboots.

5\. PostgreSQL 14 database: The database maintains vital data about the system, such as robot logs, performance metrics, and configuration details. It ensures consistency in data storage, retrieval, and processing by the backend system. In case of database unavailability, system logs and critical configuration data may be lost, and this makes recovery and troubleshooting very hard. Restoring database access ensures that all stored data can be retrieved for further operations.

6\. Rsync does the backup of critical system files, software configurations, and data to remote locations. In case of an emergency, rsync has to make sure that the latest backups are available for system restoration with minimal downtime and loss of data. Restoring from the backups via rsync facilitates rapid recovery of the robot and server software to ensure minimal configuration loss in case of any emergency.

7\. Fail2Ban monitors system logs for suspicious activities and automatically blocks suspicious IPs that show signs of malicious behavior to protect the system against unauthorized access attempts during the recovery process. In recovery, Fail2Ban ensures that only authorized personnel have access to the system to prevent potential breaches that could compromise system integrity.

During emergency recovery, system integrity must be protected by strict access controls enforced through the use of secure SSH key authentications. It shall be restricted to only those personnel who are authorized. User access shall be based on predefined roles. Furthermore, access to critical systems shall be traced and logged for auditing purposes. During the recovery of the system, it shall be strictly allowed for trusted personnel to access recovery tools or control systems so that malicious interference or unauthorized changes in configuration cannot occur.

All sensitive communications, including backups and system configurations, shall be encrypted. The use of SSL/TLS for communication between the robot, backend, and user interfaces assures data in transit is encrypted against eavesdropping and tampering. In addition, backup data should be encrypted both in transit and at rest. When restoring the system from backups, encryption ensures backup data remains secure and can't be accessed by unauthorized users, even if backup media are lost or compromised.

There needs to be a redundant server or backup system to quickly restore the functionalities of robots in case of failure. The redundancy must be both at the backend server and robot firmware levels to ensure that a hot backup is always available for immediate failover. In the event of hardware failure or system corruption, the redundant setup will allow quick restoration of services with no significant downtime.

It is important to maintain version control across all the software components, which majorly include the ROS framework, backend services, and their dependencies. Deployment during recovery can be done using automated tools, which ensures that the latest compatible versions are deployed to avoid incompatibility between software versions. This prevents possible errors or crashes during the recovery process by ensuring compatibility between the ROS framework, SLAM algorithms, and backend API. This provides good integration of the robot and backend services after recovery.
### 2.5 Information inventory 
The system creates and refers to several data files and databases that are very important for the working and recovery of the system. These data files and databases store information critical to the autonomous navigation of the robot, system performance, diagnostics, and historical data analysis.

1\. **SLAM Map Files**: The robot generates 2D SLAM map files in real time using the LiDAR sensor data. These map files give the setting that the robot operates in: the place of obstacles, the navigational paths, and the position of the robot. Locally, these files are stored in the robot's storage system. These SLAM maps are crucial in the autonomous navigation of the robot to enable it to identify obstacles, avoid them, and plan its movement. These map files help the robot resume operations in case of an emergency without having to remap the environment from scratch.

2\. **LiDAR Data Files**: The robot continuously captures LiDAR sensor data, which is stored locally on the robot's system. This data contains raw point cloud information that the robot uses to build accurate environmental maps and support the SLAM algorithm. The LiDAR data is important for real-time navigation and the generation of 2D maps. In case of a system crash, it will be possible to recreate the map of the environment with the help of these raw LiDAR data files.

3\. **Robot Logs**: The system creates log files pertaining to critical information related to the performance of the robot, sensor data, errors, warnings, and status of the system. These logs are generated by the application software of the robot and from the ROS 2 framework directly. These logs provide context to activities of the robot, be it its operational status or error reports and debugging details. They are crucial to troubleshooting in case any part of the system fails because they indicate what went wrong. The logs collected at the backend server are persisted in a PostgreSQL database for future references and periodically archived.

4\. **Database (PostgreSQL)**: The PostgreSQL 14 database keeps structured information on the robot's performance, like historical logs, configuration settings, sensor data, task history, and robot status in general. It provides the backend server with a mechanism for maintaining the system data and acquiring it efficiently. In the case of any failure of the system, the restored database will retain the historical data of the robot and the configuration settings, hence resuming operations of the system without loss of critical information  calepaasdsa .

5\. **Configuration Files**: These are those files that contain the fundamental settings or configuration used by application software and backend services for the robot. They can include all the configurations a robot will have, the firmware, sensor calibration, ROS parameters, and much more on communication. It is extremely important in order to start the system and functioning of the robot. Locally stored with the robot, they will be remote backed up to keep the data available during its recovery process.

6\. **Backup Files (Rsync)**: Rsync creates periodic backups of all important system files, software configuration, and data at remote locations. The backup contains items such as robot logs, configuration files, software packages, and map data. Once the system crashes, this backup file is used to roll back the system to its previous state. This would reduce the time taken for restoration, hence fastening the recovery process in case of any failure within the system.

7\. **Diagnostic Data**: Diagnostic data is collected to monitor the health of the system, including sensor status, power usage, temperature readings, system uptime, and other performance metrics. This data helps operators assess the operational health of the robot and server. Stored on the server, diagnostic data is referenced during system recovery to understand and address any ongoing issues with hardware or software.

8\. **Version Control Data**: Version control maintains and keeps track of changes made on the software of the robot, such as the framework-ROS 2, the SLAM algorithm, and the application software. It allows the team to easily roll back to previous software versions if any bug or failures are introduced by updates. The data will be version-controlled via a Git repository and will, therefore, always enable recovery and deployment of any version in case something goes wrong during recovery.

These data files and databases are crucial to the system's functionality and recovery in general. They will allow the robot to go back to its operation with speed and accuracy, thus reducing downtime and allowing mission-critical tasks to keep running. Proper management of these files is indispensable for ongoing maintenance and emergency recovery.
## User guide 

---[<i class="fa-solid fa-hand-holding-heart"></i>]---
!!![EcoNeuron helps users efficiently manage energy consumption by conducting detailed building audits and providing personalized recommendations.]!!!

### 3.1 Step-by-step operation guide



1. **Initial Setup**  
   - Unpack the robot and connect it to a power source. Charge it for at least 3 hours to ensure it is fully powered.  
   - Locate the QR code on the robot and scan it with your phone to download the EcoNeuron app.

2. **Calibrating**
	- Once the application is downloaded and your robot is fully charged you can connect it to your phone following the instruction on the application.
	- After calibrating the robot to your personal phone create an account on the application to receive your weekly reports and the best energy-saving plan customized for your lifestyle.

3. **Mapping (High importance step)**
	- To make sure you get the most out of your energy auditing robot you have to start the robot for it to map the building
	- EcoNeuron will navigate its way through rooms and halls and find any inefficiencies

4. **Phone sitting setup**
	- Make sure to customize your app notification as wanted to get the real-time notifications to help save energy and cost!

5. **Recommendations implementation** 
	- To see an impact on your bills and an improvement in the building sustainability you have to follow the suggested recommendation from EcoNeuron as much as possible (usually the instructions are easy to follow)

6. **Updating the system** 
	- Make sure to update the system whenever a new update is available as each update helps in fixing previous bugs and enhance your experience.
	
### 3.2 Troubleshooting


#### Robot Doesn’t Power On:
**Cause:** Low battery or power issue.
**Solution:** check if  the robot is connected to a power source and is charged for at least 3 hours.

#### Robot Fails to Map the Building:
**Cause:** Obstacles blocking its path or incorrect calibration.
**Solution:** Remove any obstacles and restart the mapping process. Check the calibration through the mobile app.

#### No Notifications Received:
**Cause:** Notification settings not enabled or connectivity issues.
**Solution:** Check your app notification settings and ensure the robot is connected to Wi-Fi.

#### Weekly Report Not Generated:
**Cause:** Data sync issue.
**Solution:** Check the app to ensure it’s updated and connected to the robot. Restart the robot if needed.

#### Inaccurate Data from Sensors:
**Cause:** Sensors not calibrated properly.
**Solution:** Perform a recalibration through the app settings.

### 3.3 FAQs


#### Q1: How long does the robot take to complete an energy audit? 
The time depends on the size of the building

#### Q2: Can the robot operate in complete darkness?
Yes, EcoNeuron has sensors and a thermal camera that allow it to operate even in dark environments.

#### Q3: What should I do if the robot encounters a blocked area?
You will receive a notification on your mobile app. Clear the obstacle and let the robot continue its operation.

#### Q4: Is the data stored securely?
Yes, all collected data is encrypted and stored securely within the app.

#### Q5: What maintenance does the robot require? 
Periodic cleaning of sensors and ensuring it’s charged regularly. Check for software updates in the app.

#### Q6: Can the robot handle multi-story buildings? 
Currently, EcoNeuron is designed for single story navigation. Future updates may include multi story compatibility.


