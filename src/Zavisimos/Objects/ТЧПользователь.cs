﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Zavisimos
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч пользователь.
    /// </summary>
    // *** Start programmer edit section *** (ТЧПользователь CustomAttributes)

    // *** End programmer edit section *** (ТЧПользователь CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч пользователь")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧПользовательE", new string[] {
            "АвПользователи as \'Ав пользователи\'",
            "АвПользователи.Логин as \'Логин\'"}, Hidden=new string[] {
            "АвПользователи.Логин"})]
    [MasterViewDefineAttribute("ТЧПользовательE", "АвПользователи", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Логин")]
    public class ТЧПользователь : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Zavisimos.АвПользователи fАвПользователи;
        
        private IIS.Zavisimos.ВходВСистему fВходВСистему;
        
        // *** Start programmer edit section *** (ТЧПользователь CustomMembers)

        // *** End programmer edit section *** (ТЧПользователь CustomMembers)

        
        /// <summary>
        /// Т ч пользователь.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПользователь.АвПользователи CustomAttributes)

        // *** End programmer edit section *** (ТЧПользователь.АвПользователи CustomAttributes)
        [PropertyStorage(new string[] {
                "АвПользователи"})]
        [NotNull()]
        public virtual IIS.Zavisimos.АвПользователи АвПользователи
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПользователь.АвПользователи Get start)

                // *** End programmer edit section *** (ТЧПользователь.АвПользователи Get start)
                IIS.Zavisimos.АвПользователи result = this.fАвПользователи;
                // *** Start programmer edit section *** (ТЧПользователь.АвПользователи Get end)

                // *** End programmer edit section *** (ТЧПользователь.АвПользователи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПользователь.АвПользователи Set start)

                // *** End programmer edit section *** (ТЧПользователь.АвПользователи Set start)
                this.fАвПользователи = value;
                // *** Start programmer edit section *** (ТЧПользователь.АвПользователи Set end)

                // *** End programmer edit section *** (ТЧПользователь.АвПользователи Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Zavisimos.ВходВСистему.
        /// </summary>
        // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему CustomAttributes)

        // *** End programmer edit section *** (ТЧПользователь.ВходВСистему CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ВходВСистему"})]
        public virtual IIS.Zavisimos.ВходВСистему ВходВСистему
        {
            get
            {
                // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему Get start)

                // *** End programmer edit section *** (ТЧПользователь.ВходВСистему Get start)
                IIS.Zavisimos.ВходВСистему result = this.fВходВСистему;
                // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему Get end)

                // *** End programmer edit section *** (ТЧПользователь.ВходВСистему Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему Set start)

                // *** End programmer edit section *** (ТЧПользователь.ВходВСистему Set start)
                this.fВходВСистему = value;
                // *** Start programmer edit section *** (ТЧПользователь.ВходВСистему Set end)

                // *** End programmer edit section *** (ТЧПользователь.ВходВСистему Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧПользовательE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧПользовательE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧПользовательE", typeof(IIS.Zavisimos.ТЧПользователь));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧПользователь.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧПользователь CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧПользователь CustomAttributes)
    public class DetailArrayOfТЧПользователь : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Zavisimos.DetailArrayOfТЧПользователь members)

        // *** End programmer edit section *** (IIS.Zavisimos.DetailArrayOfТЧПользователь members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧПользователь by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧПользователь.
        /// </summary>
        public DetailArrayOfТЧПользователь(IIS.Zavisimos.ВходВСистему fВходВСистему) : 
                base(typeof(ТЧПользователь), ((ICSSoft.STORMNET.DataObject)(fВходВСистему)))
        {
        }
        
        public IIS.Zavisimos.ТЧПользователь this[int index]
        {
            get
            {
                return ((IIS.Zavisimos.ТЧПользователь)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Zavisimos.ТЧПользователь dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
