// src/app/api/submit-form/route.js

export async function POST(request) {
    const formValues = await request.json();
  
    // Process formValues and save to database or perform some action
  
    return new Response(JSON.stringify({ message: 'Form submitted successfully!', formValues }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  export async function GET() {
    // Simulate fetching results from a database or another source
    const resultData = {
      message: 'This is the result from the server.',
      formValues: {
        gender: 'male',
        age: '30',
        hypertension: '0',
        heartDisease: '0',
        smokingHistory: '1',
        bmi: '24.5',
        hba1c: '5.6',
        bloodGlucose: '90'
      }
    };
  
    return new Response(JSON.stringify(resultData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  