@Library('ystv-jenkins')

def imageTag = ''
pipeline {
  agent {
    label 'docker'
  }

  environment {
    DOCKER_BUILDKIT = "1"
  }

  stages {
    stage('Prepare') {
      steps {
        ciSkip action: 'check'
        script {
          def imageNamePrefix = ''
          if (env.BRANCH_NAME != 'main') {
            imageNamePrefix = "${env.BRANCH_NAME}-"
          }
          imageTag = "${imageNamePrefix.replace('/', '--')}${env.BUILD_NUMBER}"
        }
      }
    }
    stage('Build Images') {
      steps {
        sh """docker build \\
          -t ghcr.io/rosesmedia/public-site:${imageTag}\\
          .
        """
      }
    }

    stage('Push') {
      when {
        anyOf {
          branch 'main'
          tag 'v*'
          changeRequest target: 'main'
        }
      }
      steps {
        dockerPush image: 'ghcr.io/rosesmedia/public-site', tag: imageTag
      }
    }

    stage('Deploy to production') {
      when {
        branch 'main'
      }
      steps {
        build job: 'Deploy Nomad Job', parameters: [
          string(name: 'JOB_FILE', value: 'roses-public-site.nomad'),
          text(name: 'TAG_REPLACEMENTS', value: "ghcr.io/rosesmedia/public-site:${imageTag}")
        ], wait: true
      }
    }
  }

  post {
    always {
      ciSkip action: 'postProcess'
      cleanWs()
    }
  }
}