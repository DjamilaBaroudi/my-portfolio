"use client"
import * as React from "react"
import * as Avatar from '@radix-ui/react-avatar';
import avatar from "../../public/avatar.png";

const AvatarC = () => (

    <div style={{ display: 'flex', gap: 20 }}>
        <Avatar.Root className="inline-flex h-20 w-20 select-none items-center justify-center overflow-hidden align-middle">
            <Avatar.Image
                className="h-full w-full rounded-full object-cover"
                src={avatar.src}
                alt="DJ"
            />
            <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-white text-sm font-medium leading-none text-violet-600" delayMs={600}>
                CT
            </Avatar.Fallback>
        </Avatar.Root>
    </div>
)

export default AvatarC;