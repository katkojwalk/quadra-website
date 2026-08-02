pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/katkojwalk/quadra-website.git'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(credentials: ['ec2-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ec2-user@16.112.110.38 << 'EOF'
                        sudo rm -rf /usr/share/nginx/html/*
                        sudo cp -r /var/lib/jenkins/workspace/quadra-website-pipeline/* /usr/share/nginx/html/
                        sudo systemctl restart nginx
                        EOF
                    '''
                }
            }
        }
    }
}
