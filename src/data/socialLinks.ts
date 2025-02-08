import FacebookIcon from "@/resources/icons/facebook.svg"
import GoogleIcon from "@/resources/icons/google.svg"
import TwitterIcon from "@/resources/icons/twitter.svg"


interface SocialLink {
    name: string,
    icon: any,
    href: string
}

export const socialLinks: SocialLink[] = [
    {
        name: 'Facebook',
        icon: FacebookIcon,
        href: 'https://www.facebook.com/',
    },
    {
        name: 'Google',
        icon: GoogleIcon,
        href: 'https://www.google.com/',
    },
    {
        name: 'Twitter',
        icon: TwitterIcon,
        href: 'https://twitter.com/?lang=en',
    },
];