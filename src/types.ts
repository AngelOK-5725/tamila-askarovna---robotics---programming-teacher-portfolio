import { LucideIcon } from 'lucide-react';

export type Language = 'ru' | 'kk';

export type Theme = 'light' | 'dark';

export interface FloatingTechIcon {
  name: string;
  icon: LucideIcon;
  colorClass: string;
  delay: number;
  initialX: number;
  initialY: number;
}

export interface StatItem {
  key: 'experience' | 'students' | 'hours' | 'centers' | 'method';
  count: string;
  icon: LucideIcon;
}

export interface EducationTimelineItem {
  year: string;
  titleKey: 'school' | 'college' | 'python_basic' | 'python_inter' | 'python_advanced';
  institution: string;
  period: string;
}

export interface Course {
  id: string;
  titleKey: 'wedo' | 'ev3' | 'roblox' | 'python' | 'compLiteracy' | 'webDesign';
  age: string;
  icon: LucideIcon;
  color: string;
}

export interface ExperienceItem {
  id: number;
  companyKey: 'eduCenterKaskelen' | 'fastTrackKids' | 'asemayKindergarten' | 'saidaShoppingCenter' | 'asUzynagash' | 'nadezhdaUzynagash';
  subjects: string[];
  icon: LucideIcon;
  yearRange: string;
}

export interface MethodologyPrinciple {
  key: 'diff' | 'interest' | 'projects' | 'practice' | 'individual' | 'atmosphere' | 'creative' | 'logical' | 'fearless' | 'trial';
  icon: LucideIcon;
  colorClass: string;
}

export interface PortfolioItem {
  id: string;
  category: 'robots' | 'games' | 'python' | 'classroom';
  titleKey: 'wedoRobot' | 'ev3Robot' | 'robloxRunner' | 'robloxSpace' | 'pythonQuiz' | 'pythonCalc' | 'classRobotics' | 'classProgramming' | 'certSoftwareTech' | 'certPythonAdvanced';
  imageUrl: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface SubmittedMessage extends ContactForm {
  id: string;
  date: string;
}
