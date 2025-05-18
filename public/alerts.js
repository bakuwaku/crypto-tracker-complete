const SUPABASE_URL = "https://rvkevuzqxoeyyhqchbbr.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2a2V2dXpxeG9leXlocWNoYmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1OTk1MzcsImV4cCI6MjA2MzE3NTUzN30.KyaJt28MnTx5oXNd_zjJCn7xD47pD_7TLrfhvvKvprw";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('alert-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const coin_id = document.getElementById('coin_id').value;
  const target_price = parseFloat(document.getElementById('target_price').value);

  const { data, error } = await supabase
    .from('alerts')
    .insert([{
      coin_id,
      target_price
    }]);

  const status = document.getElementById('status');
  if (error) {
    console.error('Insert error:', error);
    status.textContent = 'Failed to save alert.';
  } else {
    console.log('Inserted:', data);
    status.textContent = 'Alert saved successfully!';
  }
});
