import React from 'react';
import ChangePasswordForm from './_components/ChangePasswordForm/ChangePasswordForm';
import ChangeEmailForm from './_components/ChangeEmailForm/ChangeEmailForm';

const AccountPage = () => {
	return (
		<>
			<section>
				<h2 className="dark:text-color-text-accent">Смена Пароля</h2>
				<ChangePasswordForm />
			</section>
			<section className="mt-10">
				<h2 className="dark:text-color-text-accent">Смена Почты</h2>
				<ChangeEmailForm />
			</section>
		</>
	);
};

export default AccountPage;
