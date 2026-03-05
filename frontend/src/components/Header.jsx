export default function Header() {
  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid var(--border)',
      padding: '16px 40px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: 'var(--shadow)'
    }}>
      {/* Logo placeholder — swap with your <img src="..." /> */}
      <div style={{
        width: 42,
        height: 42,
        borderRadius: 10,
        background: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700,
        fontSize: 18
      }}>E</div>
      <span style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--text)'
      }}>EmpTrack</span>
    </header>
  )
}