/**
 * File jembatan untuk cPanel agar bisa menjalankan ESM
 */
(async () => {
  try {
    await import('./server.mjs');
  } catch (err) {
    console.error('Gagal menjalankan server:', err);
    process.exit(1);
  }
})();
