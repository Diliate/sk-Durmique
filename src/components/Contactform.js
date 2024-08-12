import React, { useState } from "react";
import {
	faEnvelopeOpenText,
	faHdd,
	faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const contactInfoList = [
	{
		icon: faEnvelopeOpenText,
		label: "email@easyfrontend.com",
		href: "mailto:email@easyfrontend.com",
	},
	{
		icon: faPhoneAlt,
		label: "+880 1742-0****0",
		href: "callto:+880 1742-0****0",
	},
	{ icon: faHdd, label: "easyfrontend.com", href: "easyfrontend.com" },
];

const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form className="" noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
				></textarea>
			</div>
			<div className="text-start">
				<button
					type="submit"
					className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="bg-white dark:bg-[#162231] shadow-xl rounded-2xl p-6 md:p-12">
		<h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
			Contact Us
		</h2>
		<p className="text-lg mb-12">
			We list your menu online, help you process orders.
		</p>

		<ContactForm />
	</div>
);

const ContactInfo = ({ contactInfoList }) => (
	<div classNameName="mt-5 pt-md-4">
		{contactInfoList.map((info, i) => (
			<div
				className="bg-gray-100 shadow dark:bg-gray-800 max-w-[350px] mt-6 flex items-center rounded-xl p-5"
				key={i}
			>
				<FontAwesomeIcon icon={info.icon} className="text-3xl px-2" />
				<i className="fas fa-envelope-open-text text-3xl px-2"></i>
				<a className="text-lg font-medium ml-4" href={info.href || "#!"}>
					{info.label}
				</a>
			</div>
		))}
	</div>
);

ContactInfo.propTypes = {
	contactInfoList: PropTypes.array.isRequired,
};

const ContactUs9 = () => {
	return (
		<section className="ezy__contact9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
			<div className="container px-4">
				<div className="grid grid-cols-12 py-6 lg:gap-8">
					<div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
						<h2 className="text-2xl leading-none md:text-[45px] font-bold mb-6">
							How can we help you?
						</h2>
						<p className="text-lg">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>

						<ContactInfo contactInfoList={contactInfoList} />
					</div>

					<div className="col-span-12 lg:col-span-5 lg:col-start-8">
						<ContactFormCard />
					</div>
				</div>
			</div>
		</section>
	);
};
