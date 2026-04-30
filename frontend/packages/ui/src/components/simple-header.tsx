import React from 'react';
import { Grid2x2PlusIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@workspace/ui/components/sheet';
import { Button } from '@workspace/ui/components/button';
import { MenuToggle } from '@workspace/ui/components/menu-toggle';

export function SimpleHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{ label: 'About', href: '#about' },
		{ label: 'Services', href: '#services' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Contact', href: '#contact' },
	];

	return (
		<header className="w-full">
			<nav
				className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6"
				style={{ borderBottom: '1px solid rgba(148,137,121,0.18)' }}
			>
				{/* ── Logo ── */}
				<div className="flex items-center gap-2">
					<Grid2x2PlusIcon
						className="size-5"
						style={{ color: '#F0BB78' }}
					/>
					<p
						className="font-poppins text-sm font-bold tracking-widest uppercase"
						style={{ color: '#F0BB78' }}
					>
						Tanishka Constructions
					</p>
				</div>

				{/* ── Desktop nav ── */}
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							style={{
								color: '#DFD0B8',
								fontSize: '11px',
								letterSpacing: '2px',
								textTransform: 'uppercase',
								padding: '0.4rem 1rem',
								background: 'transparent',
								border: 'none',
								textDecoration: 'none',
								transition: 'color 0.25s ease',
								display: 'inline-block',
							}}
							onMouseEnter={(e) => (e.currentTarget.style.color = '#F0BB78')}
							onMouseLeave={(e) => (e.currentTarget.style.color = '#DFD0B8')}
						>
							{link.label}
						</a>
					))}
				</div>

				{/* ── Mobile hamburger ── */}
				<Sheet open={open} onOpenChange={setOpen}>
					<Button
						size="icon"
						variant="outline"
						className="lg:hidden"
						style={{
							border: '1px solid rgba(148,137,121,0.4)',
							background: 'transparent',
							color: '#DFD0B8',
						}}
					>
						<MenuToggle
							strokeWidth={2.5}
							open={open}
							onOpenChange={setOpen}
							className="size-5"
							stroke="#DFD0B8"
						/>
					</Button>

					{/* ── Mobile Sheet ── */}
					<SheetContent
						showClose={false}
						side="left"
						style={{
							background: '#222831',
							borderRight: '1px solid rgba(148,137,121,0.2)',
						}}
					>
						<div className="grid gap-y-1 overflow-y-auto px-4 pt-12 pb-5">
							{links.map((link) => (
								<a
									key={link.label}
									href={link.href}
									style={{
										color: '#948979',
										fontSize: '11px',
										letterSpacing: '2px',
										textTransform: 'uppercase',
										padding: '0.5rem 1rem',
										textDecoration: 'none',
										transition: 'color 0.25s ease',
										display: 'block',
									}}
									onMouseEnter={(e) => (e.currentTarget.style.color = '#F0BB78')}
									onMouseLeave={(e) => (e.currentTarget.style.color = '#948979')}
								>
									{link.label}
								</a>
							))}
						</div>
						<SheetFooter style={{ borderTop: '1px solid rgba(148,137,121,0.2)', background: 'transparent' }}>
							<Button
								variant="outline"
								style={{
									border: '1px solid #DFD0B8',
									color: '#DFD0B8',
									background: 'transparent',
									fontSize: '11px',
									letterSpacing: '2px',
									textTransform: 'uppercase',
								}}
							>
								Contact Us
							</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}