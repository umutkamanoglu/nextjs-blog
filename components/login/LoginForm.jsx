"use client"
import React, { useState } from "react"
import { redirect } from "next/navigation"
import axios from "axios"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
    FieldError
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({ className, ...props }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [mailValid, setMailValid] = useState(true)
    const [passValid, setPassValid] = useState(true)
    const [mailIsDirty, setMailIsDirty] = useState(false)
    const [passIsDirty, setPassIsDirty] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("username", username)
        form.append("password", password)

        axios({
            method: "POST",
            url: "/api/auth/login",
            data: form
        })
            .then((res) => {
                if (res.data.status == "fail") {
                    console.log("Fail")
                } else {
                    redirect("/admin")
                }
            })
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome Back.</CardTitle>
                    <CardDescription>
                        Continue managing your blog by logging into your administrator account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={onSubmit}
                    >
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Username</FieldLabel>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Username.."
                                    required
                                    aria-invalid={!mailValid}
                                    onChangeCapture={(e) => {
                                        const regex = /^.{3,}$/;
                                        setMailIsDirty(true)
                                        setUsername(e.target.value)
                                        setMailValid(regex.test(e.target.value))
                                    }}
                                />
                                {!mailValid && <FieldError>Enter a valid username.</FieldError>}
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <a
                                        href="#"
                                        className="ml-auto text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    aria-invalid={!passValid}
                                    onChangeCapture={(e) => {
                                        const regex = /^.{4,}$/;
                                        setPassIsDirty(true)
                                        setPassword(e.target.value)
                                        setPassValid(regex.test(e.target.value))
                                    }}
                                />
                                {!passValid && <FieldError>The password must contain at least 6 characters.</FieldError>}
                            </Field>
                            <Field>
                                <Button
                                    type="submit"
                                    className="cursor-pointer"
                                    disabled={!(mailValid && passIsDirty && mailIsDirty && passValid)}
                                >Login</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
