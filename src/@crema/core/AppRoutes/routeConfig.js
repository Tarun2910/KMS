import React from 'react';
import {FaRegCalendarAlt, FaRegHospital} from 'react-icons/fa';
import {FiMap, FiUsers} from 'react-icons/fi';
import {HiOutlineAcademicCap, HiOutlineChartSquareBar} from 'react-icons/hi';
import {
  RiCustomerService2Line,
  RiDashboardLine,
  RiFileUploadLine,
  RiShieldUserLine,
  RiTodoLine,
} from 'react-icons/ri';
import {BiCarousel, BiCartAlt, BiErrorAlt, BiTask} from 'react-icons/bi';
import {
  BsBriefcase,
  BsCart4,
  BsChatDots,
  BsCurrencyBitcoin,
  BsQuestionDiamond,
} from 'react-icons/bs';
import {DiHtml5Multimedia} from 'react-icons/di';
import {
  MdOutlineAnalytics,
  MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import {CgFeed} from 'react-icons/cg';
import {ImFeed, ImLab} from 'react-icons/im';
import {GrDatabase, GrNavigate, GrUserAdmin} from 'react-icons/gr';
import {VscTable, VscTools} from 'react-icons/vsc';
import {
  AiOutlineEdit,
  AiOutlineLayout,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import {RoutePermittedRole} from '@crema/constants/AppEnums';
import {TbFileInvoice} from 'react-icons/tb';

const routesConfig = [
  {
    id: 'app',
    title: 'Application',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      {
        id: 'academy',
        title: 'Academy',
        messageId: 'sidebar.app.dashboard.academy',
        type: 'item',
        permittedRole: [RoutePermittedRole.User],
        icon: <HiOutlineAcademicCap />,
        url: '/signin/dashboards/academy',
      },
    ],
  },
  {
    id: 'apps',
    title: 'Apps',
    messageId: 'sidebar.apps',
    type: 'group',
    children: [
      {
        id: 'ecommerce',
        title: 'Ecommerce',
        messageId: 'sidebar.ecommerce',
        type: 'collapse',
        icon: <BiCartAlt />,
        children: [
          {
            id: 'products',
            title: 'Products',
            messageId: 'sidebar.ecommerce.products',
            type: 'item',
            permittedRole: [RoutePermittedRole.User],
            url: '/ecommerce/products',
          },
        ],
      },
      {
        id: 'admin-ecommerce',
        title: 'Ecommerce Admin',
        messageId: 'sidebar.ecommerceAdmin',
        type: 'collapse',
        icon: <GrUserAdmin />,
        children: [
          {
            id: 'productListing',
            title: 'Product Listing',
            messageId: 'sidebar.ecommerceAdmin.productListing',
            type: 'item',
            permittedRole: [RoutePermittedRole.User],
            url: 'signin/ecommerce/product-listing',
          },
          {
            id: 'addProducts',
            title: 'Add Products',
            messageId: 'sidebar.ecommerceAdmin.addProducts',
            type: 'item',
            permittedRole: [RoutePermittedRole.User],
            url: '/ecommerce/add-products',
          },
        ],
      },

      {
        id: 'coordinator',
        title: 'Ecommerce',
        messageId: 'sidebar.coordinator.action',
        type: 'collapse',
        icon: <BiCartAlt />,
        children: [
          {
            id: 'products',
            title: 'Products',
            messageId: 'sidebar.coordinator',
            type: 'item',
            permittedRole: [RoutePermittedRole.User],
            url: '/signin/ecommerce/Coordinator',
          },
        ],
      },

      {
        id: 'Creator',
        title: 'Ecommerce',
        messageId: 'sidebar.creator.action',
        type: 'collapse',
        icon: <BiCartAlt />,
        children: [
          {
            id: 'products',
            title: 'Products',
            messageId: 'sidebar.creator',
            type: 'item',
            permittedRole: [RoutePermittedRole.User],
            url: 'signin/ecommerce/Creator',
          },
        ],
      },
    ],
  },
];

export default routesConfig;
