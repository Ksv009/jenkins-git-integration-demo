const axios = require('axios');

// Jira instance URL and API credentials
const JIRA_URL = 'http://localhost:8089';
const API_TOKEN = 'MDEzNDczMDgwNjgyOuRgFGfuOYDmFMVTYrrMPi3kfELw';
//const JIRA_URL = 'https://gcsgemini.atlassian.net';
//const API_TOKEN = 'ATATT3xFfGF0y-w8TctrkIh2ssm6_AevorPiuxPhIvq1ufDz3HAYDfRnEMup0bjVllMvLwSNzTFGRTarNFQNvxzuKxIqkckS6LZLMR9J1wwebtb-x-BytQKVFbOGTNDRi9mYTdNQz7D3SuBZ6sBs7TfW56jyRIkf_LBQJBtF9iSfNuHgHOLpER4=8762EB53'; // your API token
//const EMAIL = 'ksvgkumar@gmail.com'; // your email associated with the API token

// Function to create a new Jira project
async function createJiraProject(projectKey, projectName) {
    const url = `${JIRA_URL}/rest/api/2/project`;
    //const auth = Buffer.from(`${EMAIL}:${API_TOKEN}`).toString('base64');

    const data = {
	assigneeType: 'PROJECT_LEAD',
        key: projectKey,
        name: projectName,
        projectTypeKey: 'software', // 'business', 'ops', or 'software'
        lead: 'ganesh' // for data-center only
        //leadAccountId: '603e0c3c460631006a5d1233' // Optional: Project lead, can be an email or user key 603e0c3c460631006a5d1233
        //description: 'Project created via API'
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            }
            /* headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            } */
        });
        console.log('Project created successfully:', response.data);
    } catch (error) {
        console.error('Error creating project:', error.response ? error.response.data : error.message);
    }
}

// Example usage
const projectKey = 'WCMTP'; // your project key
const projectName = 'WCM Test Project'; // your project name
createJiraProject(projectKey, projectName);
