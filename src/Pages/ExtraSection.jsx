

const ExtraSection = () => {
    return (
        <div className="space-y-10">

            <h2 className="text-4xl font-extrabold text-center text-cyan-800">Some Of Our Portfolio</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
                {/* 1st */}
                <div className="max-w-xs p-6 bg-stone-400 rounded-md shadow-md dark:text-gray-900">
                    <img src="https://i.ibb.co/9G0p9vY/home4-portfolio-1.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">CUPS</span>
                        <h2 className="text-xl font-semibold tracking-wide">HANDMADE CUPS</h2>
                    </div>
                    <p className="dark:text-gray-800">On the other hand, here this is our some work experience, where we show some of our working portfoilio.This looks really good and make you feel great.We actually try to make some different things that you want and also represent of our hands on work experience and work that we have already been done.It looks simply and gorgeous , and also makes feel happy.</p>
                </div>

                {/* 2nd */}
                <div className="max-w-xs p-6 bg-stone-400  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                    <img src="https://i.ibb.co/tLsKcWp/home4-portfolio-2.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">CERAMICS</span>
                        <h2 className="text-xl font-semibold tracking-wide">COLORFUL HOME</h2>
                    </div>
                    <p className="dark:text-gray-800">On the other hand, here this is our some work experience, where we show some of our working portfoilio.This looks really good and make you feel great.We actually try to make some different things that you want and also represent of our hands on work experience and work that we have already been done.It looks simply and gorgeous , and also makes feel happy.</p>
                </div>

                {/* 3rd */}
                <div className="max-w-xs p-6 bg-stone-400  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                    <img src="https://i.ibb.co/C7zg4Qg/home4-portfolio-3.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">CERAMICS</span>
                        <h2 className="text-xl font-semibold tracking-wide">SIMPLE CUPS</h2>
                    </div>
                    <p className="dark:text-gray-800">On the other hand, here this is our some work experience, where we show some of our working portfoilio.This looks really good and make you feel great.We actually try to make some different things that you want and also represent of our hands on work experience and work that we have already been done.It looks simply and gorgeous , and also makes feel happy.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;