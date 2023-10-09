import BtnBlue from "./BtnBlue";
import Title from "./Title";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto min-h-full">
        <Title
          par1={"Contact"}
          par2={"Submit the form below to get in touch with me"}
        />
        <div className="flex justify-center items-center py-8">
          <form
            method="POST"
            action="https://getform.io/f/8a0e29dc-6a4a-4d77-97ae-3e351a678880"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <BtnBlue>Let's talk</BtnBlue>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
