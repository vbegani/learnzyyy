const FrameComponent = () => {
  return (
    <div className="relative bg-lavender w-full h-[1024px] text-left text-sm text-gray font-plus-jakarta-sans">
      <img
        className="absolute top-[94px] left-[calc(50%_-_233px)] rounded-xl w-[465px] h-[768px]"
        alt=""
        src="/rectangle-88.svg"
      />
      <img
        className="absolute top-[137px] left-[calc(50%_-_168px)] w-[310px] h-[82px] object-cover"
        alt=""
        src="/microsoftteamsimage-2-1@2x.png"
      />
      <b className="absolute top-[246px] left-[calc(50%_-_189px)] text-23xl inline-block text-cornflowerblue w-[330px] h-[31px]">
        Sign in
      </b>
      <div className="absolute top-[320px] left-[calc(50%_-_189px)] text-5xl font-semibold">
        As Tutor
      </div>
      <div className="absolute top-[369px] left-[calc(50%_-_189px)] w-[342px] h-[76px]">
        <input
          className="bg-whitesmoke absolute h-[63.16%] w-full top-[36.84%] right-[0%] bottom-[0%] left-[0%] rounded-lg box-border border-[1px] border-solid border-gainsboro-100"
          type="text"
        />
        <div className="absolute h-[63.16%] w-[14.04%] top-[36.84%] right-[0%] bottom-[0%] left-[85.96%]">
          <input
            className="[border:none] bg-gainsboro-300 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
            type="text"
          />
        </div>
        <div className="absolute w-[83.92%] top-[1.32%] left-[0%] font-semibold inline-block [backdrop-filter:blur(4px)]">
          Email
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[602px] left-[calc(50%_-_184px)] rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[342px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-cornflowerblue" />
        <div className="absolute w-[67.25%] top-[27.08%] left-[16.37%] text-base font-semibold font-plus-jakarta-sans text-white text-center inline-block">
          Sign in
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[750px] left-[calc(50%_-_184px)] rounded-3xs w-[342px] h-12">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg box-border border-[1px] border-solid border-dodgerblue" />
        <div className="absolute h-3/6 w-[60.53%] top-[25%] right-[15.5%] bottom-[25%] left-[23.98%]">
          <img
            className="absolute h-full w-[11.59%] top-[0%] right-[88.41%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/icon--googl.svg"
          />
          <div className="absolute h-[70.83%] w-[84.06%] top-[4.17%] left-[15.94%] text-base font-semibold font-plus-jakarta-sans text-dodgerblue text-left inline-block">
            <p className="m-0">Sign in with Google</p>
          </div>
        </div>
      </button>
      <img
        className="absolute top-[684.5px] left-[calc(50%_-_196.5px)] bg-gainsboro-200 box-border w-[391px] h-px border-[1px] border-dashed border-black"
        alt=""
        src=""
      />
      <div className="absolute top-[699px] left-[calc(50%_-_189px)] text-base font-semibold">{`Don’t Have a Account ? `}</div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[692px] left-[calc(50%_+_85px)] w-[100px] h-[33px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-cornflowerblue" />
        <div className="absolute h-[41.67%] w-[67.25%] top-[27.08%] left-[16.37%] text-base font-semibold font-plus-jakarta-sans text-white text-center inline-block">
          <p className="m-0">Sign Up</p>
        </div>
      </button>
      <div className="absolute top-[474px] left-[calc(50%_-_189px)] w-[342px] h-[76px]">
        <input
          className="bg-whitesmoke absolute h-[63.16%] w-full top-[36.84%] right-[0%] bottom-[0%] left-[0%] rounded-lg box-border border-[1px] border-solid border-gainsboro-100"
          type="text"
        />
        <div className="absolute h-[63.16%] w-[14.04%] top-[36.84%] right-[0%] bottom-[0%] left-[85.96%]">
          <input
            className="[border:none] bg-gainsboro-300 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
            type="text"
          />
        </div>
        <div className="absolute w-[83.92%] top-[0%] left-[0%] font-semibold inline-block [backdrop-filter:blur(4px)]">
          Password
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
