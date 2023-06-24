import React, { useEffect, useState, useContext } from 'react';
import { DarkModeContext } from '../hooks/DarkModeContext';
import { useNavigate } from 'react-router-dom';

function Resources() {
	const { darkmode } = useContext(DarkModeContext);
	const [title, setTitle] = useState('');
	const [desc1, setDesc1] = useState('');
	const [desc2, setDesc2] = useState('');
	const [desc3, setDesc3] = useState(null);
	const [desc4, setDesc4] = useState(null);
	const [desc5, setDesc5] = useState(null);

	const toggleModal = (question) => {
		switch (question) {
			case 'whatareoptions':
				setTitle("Options? What's that?");
				setDesc1(
					'A contract that gives the buyer the right to buy or sell a financial product at an agreed upon price for a certain period of time. 1 contract is equal to 100 shares, thus if the listed price is $0.64 for an option, it would be worth 0.64 x 100 = $64 (option premium)'
				);
				setDesc2(
					'Option Premium refers to the price paid for an option contract, similar to insurance premiums being the price paid for insurance contracts, easier to use this term to refer to the price of options to avoid discrepancy between referring to strike price vs option contract price'
				);
				setDesc3(
					'Options are a form of leveraged financial derivative, which derive their value from the prices of the underlying entity which in this case refers to stocks.'
				);
				setDesc4(
					'Instead of purchasing 100 shares outright, one can arguably obtain a similar effect by purchasing 1 call option. However, it is highly recommended not to touch options until one knows what they are doing.'
				);
				setDesc5(null);
				break;
			case 'typesofoptions':
				setTitle('Types of Options');
				setDesc1(
					'1. Call Option - Gives the buyer the right to buy the underlying stock at a specified price by the expiration date. Typically purchased when the stock price is expected to go up.'
				);
				setDesc2(
					'Buying a call for AAPL for strike price 150 when the current price is 149. If the price shoots up to $155 before expiration date, the premium of the option contract will increase depending on many factors, but in easier terms it will increase by roughly (155-149)x100= $600.'
				);
				setDesc3(
					'2. Put Option - Gives the buyer the right to sell the underlying stock at a specified price by the expiration date. Typically purchased when the stock price is expected to go down'
				);
				setDesc4(
					'Buying a put for AAPL for strike price 145 when the current price is 150, if the price falls to $140 before the expiration date, the premium of the option contract will increase depending on many factors, but likewise it will roughly increase by -(140-150)x100 = $1000.'
				);
				setDesc5(null);

				break;
			case 'factors':
				setTitle('Factors affecting options premiums/pricing');
				setDesc1(
					'1. Underlying stock price - The most important thing affecting options premium is the actual current market price of the stock vs the strike price'
				);
				setDesc2(
					'2. Time AKA Days to expiration (DTE) - It is expected that with a longer period of time, there is a larger window for the price of the option to increase/decrease and thus there is a higher likelihood of uncertainty which increases option premium with a longer time period. For example, buying a 0dte option (expires same day) may cost $10 but a yearly option with 365dte may cost $5500.'
				);
				setDesc3(
					'3. Implied Volatility (IV) - Refers to the market’s forecast of likely movement of the stock’s price, based on predictive factors such as standard deviation over historical data and time periods. Higher IV leads to option premiums to increase due to the anticipation that the stock price might likely shoot up or fall drastically in the near future.'
				);
				setDesc4(
					'Related: IV Crush refers to when purchasing an option in periods of high volatility e.g. GME stock price going from $50 to $500 in a matter of 2 weeks, the options premium skyrocketed due to expectations of volatile price shifts, but when the price calmed down back to $50 and remained at $50 for a period of time, IV decreases over time and the options premium will then shrink drastically with it.'
				);
				setDesc5(null);

				break;
			case 'termsused':
				setTitle('Common terms used');
				setDesc1(
					'Premium - the price paid for an option contract, similar to insurance premiums being the price paid for insurance contracts, easier to use this term to refer to the price of options to avoid discrepancy between referring to strike price vs option contract price'
				);
				setDesc2(
					'Strike Price - the price you can buy (in the case of a call) or sell (for a put) the underlying security before the contract expires.'
				);
				setDesc3(
					'Intrinsic Value - value of an option if exercised today, calculated using the difference between the option strike price and current share price (value can be calculated)'
				);
				setDesc4(
					'Extrinsic Value - difference between the option premium and and its intrinsic value, which consists of other factors beside calculable value, such as Time (measured in DTE) and Implied Volatility (IV) which I will explain later'
				);
				setDesc5(
					'In The Money - refers to when an option contract possesses intrinsic value'
				);

				break;
			case 'coveredcall':
				setTitle('Covered Call');
				setDesc1(
					'Selling call options with shares ready as collateral in the case of shares being called away (100 shares per 1 call contract sold)'
				);
				setDesc2(
					"Let's say that I have 500 GME shares that I just bought at $20 cost price, current price is still $20, I can sell 5 Calls as I have 500 shares. I sell 5 weekly Calls at Strike Price $25 at premium of $0.60 per share, thus the calculation is done as such: 0.60 x 100 x 5 = $300."
				);
				setDesc3(
					'Scenario 1: Sold Call expires worthless.  I keep the $300USD. I continue selling Covered Calls to continue earning $300USD/week until Scenario 2 happens.'
				);
				setDesc4(
					'Scenario 2: Sold Call expires ITM. I bought shares at $20 so I actually managed to sell them for $25, in the end it’s a net profit of $5 per share PLUS I keep the option premium of $300 USD. '
				);
				setDesc5(
					'PROFIT = (TOTAL EARNED) - (TOTAL COST) = ((25 x 500) + 300) - (20 x 500) = 12800 - 10000 = 2800USD. Once our shares are called away, we now have $$$ cash instead of shares, so we will ‘rotate’ the wheel and move to the next step which is CSP. Also if you notice, both scenarios of CC result in net win for us.'
				);

				break;
			case 'cashsecuredput':
				setTitle('Cash Secured Put');
				setDesc1(
					'Selling put options with cash ready as collateral to buy in the case of assignment (forced to buy shares as part of the put agreement) and also refers to 100 shares per option contract same as call option'
				);
				setDesc2(
					'Let’s continue the previous scenario after CC results in being called away. I now have 12800USD, with GME price at $25 still. I can sell 6 weekly CSP at $20 strike price as 600 shares of GME x 20 each is $12000 which is the max (if I sell 7, in the case of assignment of shares, 700 x 20 = 14000, I only have 12800 now so this is partially naked instead of cash secured). 6 weekly CSP at premium of $0.60 each is $360 USD'
				);
				setDesc3('');
				setDesc4(
					'Extrinsic Value - difference between the option premium and and its intrinsic value, which consists of other factors beside calculable value, such as Time (measured in DTE) and Implied Volatility (IV) which I will explain later'
				);
				setDesc5(null);

				break;
			case 'thetawheelstrat':
				setTitle(
					'Theta wheel strategy - This strategy utilises selling covered call and cash-secured put to generate returns through premiums'
				);
				setDesc1(
					'1. Underlying stock price - The most important thing affecting options premium is the actual current market price of the stock vs the strike price'
				);
				setDesc2(
					'2. Time AKA Days to expiration (DTE) - It is expected that with a longer period of time, there is a larger window for the price of the option to increase/decrease and thus there is a higher likelihood of uncertainty which increases option premium with a longer time period. For example, buying a 0dte option (expires same day) may cost $10 but a yearly option with 365dte may cost $5500.'
				);
				setDesc3(
					'3. Implied Volatility (IV) - Refers to the market’s forecast of likely movement of the stock’s price, based on predictive factors such as standard deviation over historical data and time periods. Higher IV leads to option premiums to increase due to the anticipation that the stock price might likely shoot up or fall drastically in the near future.'
				);
				setDesc4(
					'Related: IV Crush refers to when purchasing an option in periods of high volatility e.g. GME stock price going from $50 to $500 in a matter of 2 weeks, the options premium skyrocketed due to expectations of volatile price shifts, but when the price calmed down back to $50 and remained at $50 for a period of time, IV decreases over time and the options premium will then shrink drastically with it.'
				);
				setDesc5(null);

				break;

			default:
				break;
		}
		let modal = document.getElementById('my-modal-4');
		modal.checked = !modal.checked;
	};

	return (
		<div
			className={
				darkmode
					? 'dark bg-slate-900 text-slate-100 min-h-screen  py-10'
					: 'min-h-screen py-10 '
			}
		>
			<div className="flex flex-row mt-32 mb-16 text-center items-center justify-evenly">
				<div
					className={
						darkmode
							? 'bg-slate-700 shadow-2xl shadow-orange-500 py-10 px-40 rounded-2xl  '
							: 'bg-slate-100 shadow-2xl shadow-slate-500 py-10 px-40 rounded-2xl '
					}
				>
					<div>
						<h1 className="text-3xl">Stocks</h1>
						<hr className="my-5" />
						<h1 className="text-2xl font-bold ">Coming soon ...</h1>
					</div>
				</div>
				<div
					className={
						darkmode
							? 'bg-slate-700 shadow-2xl shadow-orange-500 py-10 px-40 rounded-2xl '
							: 'bg-slate-100 shadow-2xl shadow-slate-500 py-10 px-40 rounded-2xl '
					}
				>
					<div>
						<h1 className="text-3xl">Options</h1>
						<hr className="my-5" />
						<h1 className="text-2xl font-bold ">Fundamentals</h1>
						<ul>
							<li
								onClick={() => toggleModal('whatareoptions')}
								className="text-xl hover:cursor-pointer hover:underline list-disc"
							>
								What are options?
							</li>

							<li
								onClick={() => toggleModal('typesofoptions')}
								className="text-xl hover:cursor-pointer hover:underline list-disc"
							>
								Types of options
							</li>
							<li
								onClick={() => toggleModal('termsused')}
								className="text-xl hover:cursor-pointer hover:underline list-disc"
							>
								Terms used
							</li>

							<li
								onClick={() => toggleModal('factors')}
								className="text-xl hover:cursor-pointer hover:underline list-disc"
							>
								Factors affecting premiums
							</li>
						</ul>

						<hr className="  my-5" />
						<h1 className="text-2xl font-bold ">Intermediate</h1>
						<ul>
							<li
								onClick={() => toggleModal('coveredcall')}
								className="text-xl hover:cursor-pointer hover:underline list-disc"
							>
								Covered Call (CC)
							</li>

							<li
								onClick={() => toggleModal('cashsecuredput')}
								className="text-xl hover:cursor-pointer hover:underline list-disc"
							>
								Cash Secured Put (CSP)
							</li>

							<li
								onClick={() => toggleModal('thetawheelstrat')}
								className="text-xl hover:cursor-pointer hover:underline list-disc"
							>
								Theta Wheel Strategy
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my-modal-4" className="modal-toggle" />
			<label htmlFor="my-modal-4" className="modal cursor-pointer">
				<label
					className={
						darkmode
							? 'bg-slate-700 shadow-2xl shadow-orange-200 py-10 rounded-2xl modal-box max-w-3xl relative '
							: 'bg-slate-100 shadow-2xl shadow-slate-500 py-10 rounded-2xl modal-box max-w-3xl relative '
					}
				>
					<h3 className="text-2xl font-bold">{title}</h3>
					<p className="py-4 text-lg">{desc1}</p>
					<p className="py-4 text-lg">{desc2}</p>
					{desc3 && <p className="py-4 text-lg">{desc3}</p>}
					{desc4 && <p className="py-4 text-lg">{desc4}</p>}
					{desc5 && <p className="py-4 text-lg">{desc5}</p>}
				</label>
			</label>
		</div>
	);
}

export default Resources;
