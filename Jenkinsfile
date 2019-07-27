#!/usr/bin/env groovy
@Library("jenkins-library@stable")

/* Import Environment in order to access env */
import hudson.model.Environment;

def main() {
    newStage("Build, Push & Deploy", this.&deploy);
}

def deploy() {
  echo "head /dev/urandom | tr -dc A-Za-z0-9 | head -c 13 ; echo ''"
    // ansiblePlaybook(
    //     playbook: "${ANSIBLE_REPO}/deploy_specialty_songs.yaml",
    //     inventory: "${ANSIBLE_REPO}/inventories/specialty_songs/${ENVIRONMENT}/hosts",
    //     extras: "--extra-vars \"source=${SOURCE_CODE} repo_name=${GIT_REPO_NAME} env=${ENVIRONMENT} git_tag=${TAG}\"",
    //     credentialsId: "ssh-key-ubuntu",
    //     vaultCredentialsId:  "ansible-vault-password",
    // );
}  

newMain(this.&main);
