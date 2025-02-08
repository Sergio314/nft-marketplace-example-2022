import { useRouter } from 'next/router';
import Link from "next/link";
import { Button } from '@/shared/components/Button';
import { footerLinks } from '@/data/footerLinks';
import { socialLinks } from "@/data/socialLinks";
import LogoImage from "@/resources/images/logo.svg"
import styles from "./Footer.module.scss";


export const Footer = () => {
    const router = useRouter()

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__head}>
                <Link href='/'>
                    <LogoImage className={styles.footer__head__logo}/>
                </Link>
                {
                    router.pathname !== '/' && (
                        <div className={styles.footer__head__actions}>
                            <div className={styles.footer__head__actions_getInTouch}>
                                Get in touch
                            </div>
                            <Link href='/#support'>
                                <Button contained className={styles.footer__head__actions_sendMessage}>
                                    Send Message
                                </Button>
                            </Link>
                        </div>
                    )
                }
            </div>
            <div className={`${styles.footer__border} ${styles.footer__border_top}`} />
            <div className={styles.footer__content}>
                <div className={styles.footer__content__leftSection}>
                    <p className={styles.footer__content__leftSection_description}>
                        To be updated join our mailing service world’s largest digital marketplace collectibles
                        and non-fungible tokens (NFTs).
                    </p>
                    <p className={styles.footer__content__leftSection_join}>
                        <span>Join</span>
                        our community
                    </p>
                    <div className={styles.footer__content__leftSection_links}>
                        {socialLinks.map((socialLink, key) => (
                            <Link target='_blank' rel='noreferrer' href={socialLink.href} key={key}>
                                <a className={styles.footer__content__leftSection_links_item} target="_blank" rel="noreferrer">
                                    <socialLink.icon />
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.footer__content__rightSection}>
                    {footerLinks.map((el, key) => (
                        <div className={styles.footer__content__rightSection__column} key={key}>
                            <span className={styles.footer__content__rightSection__column_title}>{el.title}</span>
                            <ul className={styles.footer__content__rightSection__column_links}>
                                {el.values.map((el, key) => (
                                    <Link href={el.href} key={key}>
                                        <a className={styles.footer__content__rightSection__column_links_item}>{el.name}</a>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${styles.footer__border} ${styles.footer__border_bottom}`} />
            <div className={styles.footer__content__mobile}>
                <div className={styles.footer__content__mobile_join}>
                    <span>Join </span>our community
                </div>
                <p className={styles.footer__content__mobile_description}>
                    To be updated join our mailing service world’s largest digital marketplace collectibles
                    and non-fungible tokens (NFTs).
                </p>
                <div className={styles.footer__content__mobile_links}>
                    {socialLinks.map((socialLink, key) => (
                        <Link href={socialLink.href} key={key}>
                            <socialLink.icon className={styles.footer__content__mobile_links_item} />
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.footer__bottom}>© 2022 All rights reserved</div>
        </footer>
    )
}
