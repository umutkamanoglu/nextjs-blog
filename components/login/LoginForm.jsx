"use client"
import React, { useState } from "react"
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
    const [mailValid, setMailValid] = useState(true)
    const [passValid, setPassValid] = useState(true)
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
                    <form>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    aria-invalid={!mailValid}
                                    onChangeCapture={(e) => {
                                        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                                        setMailValid(regex.test(e.target.value))
                                    }}
                                />
                                {!mailValid && <FieldError>Enter a valid email address.</FieldError>}
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
                                        const regex = /^.{6,}$/;
                                        setPassValid(regex.test(e.target.value))
                                    }}
                                />
                                {!passValid && <FieldError>The password must contain at least 6 characters.</FieldError>}
                            </Field>
                            <Field>
                                <Button type="submit">Login</Button>
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
