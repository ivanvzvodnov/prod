import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsButtomLeft,
    'bottom right': cls.optionsButtomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};
