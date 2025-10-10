import React from 'react'
import { LoginForm } from '@/components/login/LoginForm'

export default function page() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">

                <LoginForm />
            </div>
        </div>
    )
}
