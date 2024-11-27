'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { motion } from 'framer-motion'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  return (
    <motion.header
      className={headerClass}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <motion.div whileHover="hover" variants={linkVariants}>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <motion.div
              className="mr-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Logo />
            </motion.div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </motion.div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="hidden sm:block">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </motion.header>
  )
}

export default Header
