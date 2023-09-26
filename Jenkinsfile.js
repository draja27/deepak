pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git
                git credentialsId: 'your-git-credentials', url: 'https://github.com/draja27/deepak.git'
            }
        }

        stage('Build') {
            steps {
                // Build your project (e.g., compile code, package JAR)
                sh 'mvn clean package' // Adjust this command based on your build tool
            }
        }

        stage('Deploy to Tomcat') {
            steps {
                // Copy the JAR file to the Tomcat server
                sh 'scp target/test.jar root@92.168.111.130:/tomcat/'

                
            }
        }
    }
}
