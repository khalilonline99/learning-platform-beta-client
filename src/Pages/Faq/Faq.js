import React from 'react';

const Faq = () => {
    
    return (
        <div className='container mx-auto mt-12'>

            <h2 className='text-xl font-medium text-center'>Frequently asked questions</h2>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    What does Mentor Hero cost??
                </div>
                <div className="collapse-content">
                    <p>Get started for free - all you'll need is an email address. Join Mentor Hero for full access to over thousands of classes, along with other features like offline viewing, subtitles, transcripts, perks, and more.

                        To learn more about membership pricing in your region, create an account. If you're an existing member and logged into your account, visit your Payments page to see your current pricing.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    How do I purchase a Mentor Hero membership?
                </div>
                <div className="collapse-content">
                    <p>Create a Mentor Hero account to enroll in a membership. When you enroll, you'll have unlimited access to all Mentor Hero classes, additional features such as offline viewing, and your membership will support the work of teachers you love. You are able to cancel at any point in your membership.
                    </p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    How do I cancel my Mentor Hero membership?
                </div>
                <div className="collapse-content">
                    <p>You can cancel at any time you want and renew your membership if you decide to return. If you started your membership or signed up for a free trial on our website, you'll need to visit www.Mentor Hero.com from a desktop or mobile web browser to cancel your membership.

                        The steps to cancel your membership will vary based on your payment method, see How do I cancel my Mentor Hero membership? for more information.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Faq;