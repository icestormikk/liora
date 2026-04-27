import './lioraModal.css';
import { PropsWithChildren, ReactNode, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";

export interface LioraModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	description?: string;
	footer?: ReactNode;
	closeOnOverlayClick?: boolean;
	closeOnEsc?: boolean;
	showCloseButton?: boolean;
	className?: string
}

export default function LioraModal({ children, isOpen, onClose, title, description, footer, closeOnOverlayClick = true, closeOnEsc = true, showCloseButton = true, className = "" } : PropsWithChildren<LioraModalProps>) {
	const dialogRef = useRef<HTMLDivElement>(null);
	const previousFocusElementRef = useRef<HTMLElement | null>(null);

	const trapFocus = useCallback((event: KeyboardEvent) => {
		if(!dialogRef.current)
			return;

		const focusable = dialogRef.current.querySelectorAll<HTMLElement>(`a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])`);
		const firstFocusable = focusable[0], lastFocusable = focusable[focusable.length - 1];

		const { key, shiftKey } = event;
		if(key === "Tab") {
			if(shiftKey) {
				if(document.activeElement === firstFocusable) {
					event.preventDefault();
					lastFocusable?.focus();
				} else {
					if(document.activeElement === lastFocusable) {
						event.preventDefault();
						firstFocusable?.focus();
					}
				}
			}
		}
		if(key === "Escape" && closeOnEsc) onClose();
	}, [closeOnEsc, onClose]);

	useEffect(() => {
		if(isOpen) {
			previousFocusElementRef.current = document.activeElement as HTMLElement;

			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", trapFocus);

			requestAnimationFrame(() => {
				dialogRef.current?.focus();
			});
		} else {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", trapFocus);
			previousFocusElementRef.current?.focus();
		}

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", trapFocus);
		}
	}, [isOpen, trapFocus])

	if(!isOpen)
		return;

	return createPortal(
		<div className="modal-root modal-overlay" onClick={closeOnOverlayClick ? onClose : undefined} role="presentation">
			<div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={title ? "modal-title" : undefined} tabIndex={-1} onClick={(event) => event.stopPropagation()} className={["modal-dialog", title || description ? "has-header" : "", footer ? "has-footer" : "", className].filter(Boolean).join(" ")}>
				<div className="modal-header">
					<div className="modal-header-text">
						{ title && (
							<h2 className="modal-title">{title}</h2>
						) }
						{ description && (
							<p className="modal-description">{description}</p>
						) }
					</div>
					<div>
						{ showCloseButton && (
							<button className="modal-close" onClick={onClose} aria-label="Закрыть модальное окно">
								<MdOutlineClose size="20px"/>
							</button>
						) }
					</div>
				</div>
				<div className="modal-body">
					{children}
				</div>
				{ footer && (
					<div className="modal-footer">{footer}</div>
				) }
			</div>			
		</div>,
		document.body
	);
}