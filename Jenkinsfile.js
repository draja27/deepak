pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                script {
                    def scmVars = 'https://github.com/draja27/deepak.git'
                    // Optionally, you can print out some Git information
                    echo "Checked out Git branch: ${scmVars.GIT_BRANCH}"
                    echo "Git commit: ${scmVars.GIT_COMMIT}"
                }
            }
        }

        stage('Build') {
            steps {
                // Replace this with your build steps (e.g., compiling, packaging)
                sh 'echo "Building the project"'
            }
        }

        stage('Test') {
            steps {
                // Replace this with your testing commands
                sh 'echo "Running tests"'
            }
        }
    }
}
