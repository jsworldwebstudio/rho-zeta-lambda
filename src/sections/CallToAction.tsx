export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tighter">Become An Alpha</h2>
        <p className="mt-5 text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
          Becoming a member of Alpha Phi Alpha Fraternity requires an investment of your personal time,
          talents, and money.
        </p>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="relative border py-2 px-3 rounded-lg font-medium text-2xl bg-gradient-to-b from-[#190D2E] to-[#E3B53B] shadow-[0px_0px_12px_#A2762B]">
            <div className="absolute inset-0">
              <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="absolute inset-0 shadow-[0_0_10px_rgb(227,181,59,.7)] rounded-lg"></div>
            </div>
            <span className="text-white">Join Our Chapter</span>
          </button>
        </div>
      </div>
    </section>
  );
};
