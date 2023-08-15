export default function Footer() {
  const footerText = "Made with ❤️ by @";
  return (
    <div className='ml-auto mr-auto mt-2'>
      <p>
        {footerText}
        <a
          href='https://www.github.com/rishmi5h'
          target={"_blank"}
          className='hover:text-blue-700 hover:border-b-2 border-blue-700 pb-1'
        >
          rishmi5h
        </a>
      </p>
    </div>
  );
}
