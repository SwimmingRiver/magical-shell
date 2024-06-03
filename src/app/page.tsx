import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#a56bdb' }}>
      <Image src="/images/sea-snail.png" alt="logo" width={500} height={500} />
    </div>
  );
}
