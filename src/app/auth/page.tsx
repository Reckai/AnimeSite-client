// 'use client';
//
// import React, { useCallback } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import Image from 'next/image';
// import { useMutation } from '@apollo/client/react/hooks/useMutation';
// import { redirect, useRouter } from 'next/navigation';
// import Images from '@/../public/goku-vegeta-shenron-android-18-bulma-dragon-ball-ce545764d39bd459520bae22f512f6b9.png';
// import Button from '@/app/Components/Button/Button';
// import { AuthContext } from '../context/authcontext/authContext';
//
// type Inputs = {
//     Login: string
//     password: string
//
// }
//
// const Page: React.FC = () => {
//   const router = useRouter();
//   const {
//     register, handleSubmit, watch, formState: { errors },
//   } = useForm<Inputs>();
//
//   return (
//     <section className=" flex mt-24 px-3.5 justify-center">
{/*      <div className="flex  items-center justify-between max-w-6xl mx-7">*/}
{/*        <div className="bg-color-el-bg flex flex-col mt-2 px-6 py-5 max-w-[460px]">*/}
{/*          <div className="">*/}
{/*            <h3 className="text-2xl">*/}
{/*              {SingInOrSingUpFlag ? 'Вход' : 'Регистрация'}*/}
{/*            </h3>*/}
{/*            <p className="text-color-text">*/}
{/*              {SingInOrSingUpFlag ? 'Войдите в свою учетную запись, используя адрес электронной почты и пароль, указанные при регистрации.' : 'Регистрация занимает меньше минуты, но дает вам полный контроль над вашими релизами.'}*/}
{/*            </p>*/}

{/*          </div>*/}
{/*          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>*/}
{/*            /!* register your input into the hook by invoking the "register" function *!/*/}
{/*            <label className="my-3 text-color-text text-sm">*/}
{/*              Email:*/}
{/*              <input*/}
{/*                type="email"*/}
{/*                className="text-color-text bg-form-color w-full my-2 py-2 focus rounded-md px-1"*/}
{/*                {...register('Login', {*/}
{/*                    required: 'Email is required',*/}
{/*                    pattern: {*/}
{/*                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,*/}
{/*                      message: 'Please enter a valid email',*/}
{/*                    },*/}
{/*                  })}*/}
{/*              />*/}
{/*              {errors.Login && <span className="text-error">{errors.Login.message}</span>}*/}
{/*            </label>*/}

{/*            <label className="my-3 text-color-text text-sm">*/}
{/*              Password:*/}
{/*              /!* use aria-invalid to indicate field contain errors *!/*/}
{/*              <input*/}
{/*                type="password"*/}
{/*                className="text-color-text bg-form-color w-full my-2 py-2 rounded-md px-1"*/}
{/*                {...register('password', { required: true })}*/}
{/*              />*/}
{/*              {errors.password && <span className="text-error">This field is required</span>}*/}
{/*            </label>*/}
{/*            {SingInOrSingUpFlag ? (*/}
{/*              <div className="py-2">*/}
{/*                <span className="cursor-pointer text-info">*/}
{/*                  Забыли пароль?*/}
{/*                  </span>*/}
{/*              </div>*/}
{/*            ) : null}*/}
{/*            <Button>*/}
{/*              {SingInOrSingUpFlag ? 'Войти' : 'Зарегистрироваться'}*/}
{/*            </Button>*/}

{/*            <div className="flex text-sm mt-2">*/}

{/*              <span className="text-sm text-color-text">*/}
{/*                {SingInOrSingUpFlag ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}*/}
{/*              </span>*/}
{/*              <span*/}
{/*                className="cursor-pointer text-info ml-2"*/}
{/*                onClick={() => SetSingInOrSingUpFlag(!SingInOrSingUpFlag)}*/}
{/*              >*/}
{/*                {SingInOrSingUpFlag ? ' Зарегистрироваться' : ' Войти'}*/}
{/*              </span>*/}

{/*            </div>*/}
{/*          </form>*/}
{/*        </div>*/}
{/*        <div className="max-w-[400px]">*/}
{/*          <Image width={500} height={500} alt="asdad" src={Images} />*/}
{/*        </div>*/}
{/*      </div>*/}
{/*    </section>*/}
{/*  );*/}
{/*};*/}
//
// export default Page;
