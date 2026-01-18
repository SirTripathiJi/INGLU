import React from 'react';
import { Check } from 'lucide-react';

export function PricingPlans() {
    const plans = [
        { name: "Monthly", price: "49", color: "from-[#E9B3FB] to-[#B19CD9]" },
        { name: "Quarterly", price: "149", color: "from-[#6F00FF] to-[#9400FF]", recommended: true },
        { name: "Yearly", price: "499", color: "from-[#FF204E] to-[#FF5757]" },
    ];

    return (
        <section className="py-20 bg-[#2B145C]" id="pricing-section">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">

                <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center uppercase tracking-tighter">
                    Choose the Plan That Fits Your Needs
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative bg-[#3B0270] rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:-translate-y-2 ${plan.recommended ? 'border-[#6F00FF] shadow-[0_0_40px_rgba(111,0,255,0.2)] scale-105 z-10' : 'border-white/5 shadow-xl hover:border-[#E9B3FB]/30'}`}>

                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6F00FF] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Recommended
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">{plan.name}</h3>
                                <div className="text-5xl font-black text-white mb-2">
                                    ₹{plan.price}
                                    <span className="text-lg font-medium text-[#E9B3FB]/60 ml-1">
                                        /{plan.name === 'Monthly' ? 'mo' : plan.name === 'Quarterly' ? 'qtr' : 'yr'}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-[#E9B3FB]/90 font-medium">
                                    <Check size={18} className="text-[#6F00FF]" /> Full Community Access
                                </li>
                                <li className="flex items-center gap-3 text-[#E9B3FB]/90 font-medium">
                                    <Check size={18} className="text-[#6F00FF]" /> All Benefits Included
                                </li>
                                <li className="flex items-center gap-3 text-[#E9B3FB]/90 font-medium">
                                    <Check size={18} className="text-[#6F00FF]" /> ID Card & Certificate
                                </li>
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r ${plan.color}`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4 uppercase">Want to Become a MEMBER?</h3>
                    <p className="text-[#E9B3FB]/80 max-w-xl mx-auto mb-8">
                        Purchase your membership and become a part of the movement.
                    </p>
                    <button className="bg-transparent border-2 border-[#6F00FF] text-[#6F00FF] hover:bg-[#6F00FF] hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all">
                        Contact Support
                    </button>
                </div>

            </div>
        </section>
    );
}
