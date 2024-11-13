import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TvIcon from '@mui/icons-material/Tv';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ForumIcon from '@mui/icons-material/Forum';
import DomainIcon from '@mui/icons-material/Domain';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const SidebarComp = () => {
    return (
        <aside className="max-w-[256px] p-6 flex flex-col gap-1 bg-white rounded-xl ">
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <DashboardIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">Dashboard</p>
            </div>
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <PeopleIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">People</p>
            </div>
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <AssignmentIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">Projects</p>
            </div>
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <CalendarMonthIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">Calendar</p>
            </div>
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <TvIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">Training</p>
            </div>
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <HourglassBottomIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">Timesheet</p>
            </div>
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <ForumIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">Reports</p>
            </div>
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <DomainIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">Administration</p>
            </div>
            <div className="flex flex-row items-center gap-6 hover:bg-[#EAF2fd] p-2 w-[216px] h-10 rounded-lg ease-in duration-300 group">
                <QuestionMarkIcon className="text-[#8E8D93] group-hover:text-[#2F80ED]" />
                <p className="text-[#8E8D93] group-hover:text-[#2F80ED]">Help</p>
            </div>
        </aside>
    );
};

export default SidebarComp;
