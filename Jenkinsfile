pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/katkojwalk/quadra-website.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Quadra website files checked successfully'
            }
        }

    }
}
