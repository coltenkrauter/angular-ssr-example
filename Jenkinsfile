#!/usr/bin/env groovy
@Library("jenkins-library@stable")

/* Import Environment in order to access env */
import hudson.model.Environment;

def main() {
    newStage("Build, Push & Deploy", this.&deploySpecialtySongs);
}

def deploySpecialtySongs() {
  PASSWORD = sh(script: "head /dev/urandom | tr -dc A-Za-z0-9 | head -c 24 ; echo ''", returnStdout: true).trim()
  USERNAME = sh(script: "head /dev/urandom | tr -dc A-Za-z0-9 | head -c 24 ; echo ''", returnStdout: true).trim()

  ansiblePlaybook(
      playbook: "${ANSIBLE_REPO}/deploy_specialty_songs.yaml",
      inventory: "${ANSIBLE_REPO}/inventories/specialty_songs/${ENVIRONMENT}/hosts",
      extras: "--extra-vars \"source=${SOURCE_CODE} repo_name=${GIT_REPO_NAME} env=${ENVIRONMENT} git_tag=${TAG} basic_auth_username=${USERNAME} basic_auth_password=${PASSWORD}\"",
      credentialsId: "ssh-key-ubuntu",
      vaultCredentialsId:  "ansible-vault-password",
  );

  if(!TAG)
    slackUpdate("USERNAME: ${USERNAME}\nPASSWORD: ${PASSWORD}");
}  

newMain(this.&main);
