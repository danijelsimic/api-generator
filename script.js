document.getElementById('apiForm').addEventListener('submit', (event) => {
event.preventDefault();

const apiUrl = document.getElementById('apiUrl').value;
const httpMethod = document.getElementById('httpMethod').value; 
const requestBody = document.getElementById('requestBody').value;

const axiosCode = `import axios from 'axios';

async function misterBean() {
  try {
    const response = await axios.${httpMethod}('${apiUrl}'${httpMethod === 'post' || httpMethod === 'put' ? `, ${JSON.stringify(requestBody)}` : ''}, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer yourTokenHere'
      }
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
    `;
    document.getElementById('axiosCode').value = axiosCode;
    const newTab = new bootstrap.Tab(document.getElementById('axios-tab'));
    newTab.show();
  });
