#/bin/sh +ex
buildNumber="1.0.0"
existingBuildNumber="1.0.0"
branchName="andy"
project="applied-grove-226015"
appName="entrypoint-nodejs"
imageTag="gcr.io/${project}/${appName}:${branchName}.${buildNumber}"

gcloud  builds submit -t ${imageTag}
sed -i.bak "s#gcr.io/applied-grove-226015/${appName}:${branchName}.${existingBuildNumber}#${imageTag}#g" ../k8s/entrypoint-nodejs-deployment.yaml
kubectl apply  -f  ../k8s/entrypoint-nodejs-deployment.yaml
kubectl apply  -f  ../k8s/entrypoint-nodejs-cluster-ip-service.yaml
