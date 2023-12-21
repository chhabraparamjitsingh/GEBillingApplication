----------------------------------------------------------------
--------------------------SETUP FILE----------------------------
----------------------------------------------------------------

--------------------------------------------------------------
Turn off firewall
--------------------------------------------------------------
	Domain Network > Off
	Private Network > Off
	Public Network > Off

--------------------------------------------------------------
Install Sql Server using Basic Settings
--------------------------------------------------------------
 	File Name: SQL2022-SSEI-Expr.exe
		Can be downloaded from : https://go.microsoft.com/fwlink/p/?linkid=2216019&clcid=0x4009&culture=en-in&country=in

Installation: 
	Basic Installation
	Default Directory
	
	Copy connection string: Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;
	Connect Now : You need to get the output in cmd as '1 row affected'
	Close CMD
	Close Window
	

--------------------------------------------------------------
Install Java
--------------------------------------------------------------
	File Name: jre-8u391-windows-x64.exe
		Can be downloaded from: https://www.java.com/en/download/manual.jsp


--------------------------------------------------------------
Install SSMS 
--------------------------------------------------------------
	File Name: SSMS-Setup-ENU.exe
		Can be downloaded from : https://aka.ms/ssmsfullsetup
 
Installation
	- Default Directory
	
	
---------------------------------------------------------------
Restart Windows
---------------------------------------------------------------




---------------------------------------------------------------
SQL Server Configuration Manager
---------------------------------------------------------------

SQL Server Network Configurations > Protocols for SQLExpress
	Shared Memory > Enabled
	Named Pipes > Enabled
	TCP/IP > Enabled
	TCP/IP > IP Addresses > IPAll > TCPPort > 1433
	
SQL Server Services
	SQL Server Browser > Service > Start Mode > Automatic
	SQL Server Browser > Advanced > Active > Yes
	SQL Server Browser > (Right Click) Restart
	SQL Server Browser > (Right Click) Start
	SQL Server (SQLEXPRESS) > Restart 
	
---------------------------------------------------------------
Restart SQL Server
---------------------------------------------------------------
SQL Server Services
	SQL Server (SQLEXPRESS) > Restart 

---------------------------------------------------------------
SQL Server Management Studio
---------------------------------------------------------------
	Connect
	Security > Logins > sa > (Right Click) Properties 	> Update Password 
														> Default Database > GE
														> Status > Login Enabled 
														> Ok
	
	PREET\SQLEXPRESS (SQL Server) > (Right Click) Properties > Security > SQL Server & Windows Authentication Mode

	Restart SQL Server
	- Try Logging in using SQL Server Authentication
	

---------------------------------------------------------------
Jar Files: JDBC Driver, JSON
---------------------------------------------------------------
	Download JDBC Driver & JSON
		Can be downloaded from	: 	https://go.microsoft.com/fwlink/?linkid=2247576
								:	https://www.javatpoint.com/jsonpages/json-simple-1.1.1.jar
	Extract the zip file
	Copy the folder to C:/Program Files


---------------------------------------------------------------
Install Eclipse
---------------------------------------------------------------
	File Name: eclipse-inst-jre-win64.exe
		Can be downloaded from: https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2023-09/R/eclipse-inst-jre-win64.exe&mirror_id=105

Installation:
	- Eclipse IDE for Enterprise Java & Web Developers
	- Java 17+ VM > JRE 21.0.1
	- Default Location

Open Eclipse
	- Assign Directory as default
	- Launch
	

--------IDE Perspective
	Project Name : Java2SQLServer
	JRE: JavaSE-11
	Don't create a module
	
	(Right click) ProjectName (Java2SQLServer) > Properties > Libraries
	Add External Jar 	> Select 'C:\Program Files (x86)\sqljdbc_12.4.2.0_enu\sqljdbc_12.4\enu\jars\mssql-jdbc-12.4.2.jre11.jar'
						> Select 'C:\Program Files (x86)\sqljdbc_12.4.2.0_enu\json-simple-1.1.1.jar'
	
	Double click JRE System Library 
	Select Alternate JRE > Installed JRE > Select the JRE > Apply & Close
	
	Apply & Close


	(Right click) src > New > Class
	Package: net.codejava.sql
	Name: JavaConnect2SQL
	Select Public Static Void Main
	
	
--------Database Perspective	
Change Perspective to Data base
	(Right click) Database Connections > SQL Server
	New Driver Definition
		
	Add Jar
	C:\Program Files (x86)\Microsoft JDBC DRIVER 12.4 for SQL Server\sqljdbc_12.4\enu\jars\mssql-jdbc-12.4.2.jre11.jar

	URL:   jdbc:sqlserver://PREET\SQLEXPRESS;databaseName=ge;Trusted_Connection=True;trustServerCertificate=True;
	Driver: com.microsoft.sqlserver.jdbc.SQLServerDriver
	User:  sa
	Pass:  gurprasad

	Test Connection > Ping Successful
	



---------------------------------------------------------------
Install NodeJS (Incomplete)
---------------------------------------------------------------
	File Name: node-v20.10.0-x64.msi
		Can be downloaded from: https://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msi  (node version 20.10.0)
	- Also install additionally available tools like chocolaty
	
	Run 'npm i -g @angular/cli@15.2.10' Install Angular Globally
	
	check if node and npm is installed
	node --version
	npm --version
	
	Create new project
	ng new hellow-world
		Angular Routing - y
		Stylesheet Format - scss
	
	Go to target directory
	Shift + Right Click -> Open PowerShell here
		npm install -g npm@10.2.4 @angular/cli@15.2.10
	
	Load Application on Webserver
		ng serve -o

---------------------------------------------------------------
Visual Studio Code (Incomplete)
---------------------------------------------------------------

	Can be downloaded from: https://code.visualstudio.com/docs/?dv=win64user

---------------------------------------------------------------
Install Spring Boot 4
---------------------------------------------------------------

	File Name: spring-tool-suite-4-4.21.0.RELEASE-e4.30.0-win32.win32.x86_64.self-extracting.jar
		Can be downloaded from : https://spring.io/tools
	
	Reference video: https://www.youtube.com/watch?v=FXOGxD1cx-Q
	Double click the file to extract and install
	
	
	Create new Spring Boot Starter Project
	- GroupID: net.codejava (Next)
	- JDBC API; MS SQL Server Driver, Spring Boot Dev Tools, Spring Web, Thymeleaf (Next, Finish)
	- /src/main/resources - open aaplication.properties & paste below lines

spring.datasource.url = jdbc:sqlserver://PREET\\SQLEXPRESS;databaseName=ge;Trusted_Connection=True;trustServerCertificate=True
spring.datasource.username = sa
spring.datasource.password = gurprasad



(Reference Video : 	https://www.youtube.com/watch?v=giG2aNKkoR0&list=PPSV)
				
	
	
	


Create new login
https://www.atlassian.com/data/admin/grant-sql-server-table-permissions#:~:text=Launch%20SQL%20Server%20Management%20Studio,and%20enter%20a%20secure%20password.


Spring Boot Web Project reference video : https://www.youtube.com/watch?v=px5rfwi4yYk
SpringBoot & Autowire Explained: https://www.youtube.com/watch?v=K43qyHJXmWI&t=1032s
Write complete java spring boot application in Visual Studio Code: https://www.youtube.com/watch?v=uq4GjRF_860


------Create Database;
Create database GE;

------Create User
USE [master]
GO
CREATE USER [paramjit] FOR LOGIN [paramjit] WITH DEFAULT_SCHEMA=[ge]
GO






					



Eclipse integration:

Primary Video: https://www.youtube.com/watch?v=mRU4DjQQH0c











Secondary Video if above doesn't work: https://www.youtube.com/watch?v=x8GiogC4SdE&t=805



https://www.codejava.net/jdbc-tutorials
https://www.coderanch.com/t/306316/databases/SQLServerException-TCP-IP-connection-host





\( -> \('
### -> ', '
\t	-> Nothing
$ -> '\)






Angular


Creating new component command
//Go to destination dir where you wish to create the component and run the below command in the terminal

-> ng g c component1


#---How to call a function from other component
https://www.youtube.com/watch?v=kUc-rwbJtqY

